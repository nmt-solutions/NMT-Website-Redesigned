// import { pool } from "@/database";
// import { NextResponse } from "next/server";
// import QueryStream from "pg-query-stream";

// export const GET = async (
//   req: Request,
//   dynamic: Promise<{ params: { id: string } }>,
// ) => {
//   const database = await pool.connect();
//   try {
//     const fileId = (await dynamic).params.id;

//     // const file = await database.query.Files.findFirst({
//     //   where: (columns, { eq }) => eq(columns.fileId, fileId),
//     // });

//     // if (!file) {
//     //   return NextResponse.json({ error: "File Not Found" }, { status: 404 });

//     // }

//     console.log(fileId);

//     const query = new QueryStream(
//       'SELECT data, "mimeType", filename FROM "files" WHERE "fileId" = $1',
//       [fileId],
//     );

//     const stream = database.query(query);

//     let fileInfo: { mimeType: string; filename: string };

//     stream.on("data", (row) => {
//       fileInfo = {
//         mimeType: row.mimeType,
//         filename: row.filename,
//       };
//     });

//     stream.on("error", (error) => {
//       console.error(error);
//       return NextResponse.json(
//         { error: "Error retrieving file", message: (error as Error).message },
//         { status: 500 },
//       );
//     });

//     const responseStream = new ReadableStream({
//       start(controller) {
//         stream.on("data", (row) => {
//           controller.enqueue(row.data);
//         });

//         stream.on("end", () => {
//           controller.close();
//         });

//         stream.on("error", (err) => {
//           controller.error(err);
//         });
//       },
//     });

//     // await new Promise((resolve) => {
//     //   stream.on("data", () => resolve(undefined));
//     // });

//     if (!fileInfo) {
//       return NextResponse.json({ error: "File Not Found" }, { status: 404 });
//     }

//     return new NextResponse(responseStream, {
//       status: 200,
//       headers: {
//         "Content-Type": fileInfo?.mimeType,
//         "Content-Disposition": `inline; filename="${fileInfo?.filename}"`,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Error retrieving file", message: (error as Error).message },
//       { status: 500 },
//     );
//   }
// };

// app/api/upload/route.js
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import mime from "mime-types";
import { randomUUID } from "crypto";

export const runtime = "nodejs"; // Ensure Node.js runtime

export async function POST(request: NextRequest) {
  try {
    // Parse the FormData
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file || !file?.name) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read the file data
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Ensure the upload directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    // Generate a unique filename
    const fileExtension = mime.extension(file.type) || "bin";
    const fileName = `${randomUUID()}.${fileExtension}`;
    const filePath = path.join(uploadDir, fileName);

    // Save the file
    await fs.writeFile(filePath, buffer);

    // Generate a URL to access the file
    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      message: "File uploaded successfully",
      fileUrl,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 },
    );
  }
}
