import { pool } from "@/database";
import { NextResponse } from "next/server";
import QueryStream from "pg-query-stream";

export const GET = async (
  req: Request,
  dynamic: Promise<{ params: { id: string } }>,
) => {
  const database = await pool.connect();
  try {
    const fileId = (await dynamic).params.id;

    // const file = await database.query.Files.findFirst({
    //   where: (columns, { eq }) => eq(columns.fileId, fileId),
    // });

    // if (!file) {
    //   return NextResponse.json({ error: "File Not Found" }, { status: 404 });
    // }

    const query = new QueryStream(
      'SELECT data, "mimeType", filename FROM "Files" WHERE "fileId" = $1',
      [fileId],
    );

    const stream = database.query(query);

    let fileInfo: { mimeType: string; filename: string };

    stream.on("data", (row) => {
      fileInfo = {
        mimeType: row.mimeType,
        filename: row.filename,
      };
    });

    stream.on("error", (error) => {
      console.error(error);
      return NextResponse.json(
        { error: "Error retrieving file", message: (error as Error).message },
        { status: 500 },
      );
    });

    const responseStream = new ReadableStream({
      start(controller) {
        stream.on("data", (row) => {
          controller.enqueue(row.data);
        });

        stream.on("end", () => {
          controller.close();
        });

        stream.on("error", (err) => {
          controller.error(err);
        });
      },
    });

    await new Promise((resolve) => {
      stream.on("data", () => resolve(undefined));
    });

    if (!fileInfo) {
      return NextResponse.json({ error: "File Not Found" }, { status: 404 });
    }

    return new NextResponse(responseStream, {
      status: 200,
      headers: {
        "Content-Type": fileInfo?.mimeType,
        "Content-Disposition": `inline; filename="${fileInfo?.filename}"`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error retrieving file", message: (error as Error).message },
      { status: 500 },
    );
  }
};
