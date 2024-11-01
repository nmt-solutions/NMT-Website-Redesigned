import { Roles } from "@/lib/enums";
import getRole from "@/lib/roles";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  fileUploader: f({
    image: { maxFileSize: "256MB" },
    blob: {
      maxFileSize: "256MB",
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      const isAdmin = getRole(Roles.Admin);

      // If you throw, the user will not be able to upload
      if (!isAdmin) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { status: "ok" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { status: metadata.status, file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
