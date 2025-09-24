import { metadata } from "@/app/layout";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    // define routes for different upload types
    postImage: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1,
        },
    })
        .middleware(async () => {
            // This code runs on your server before upload
            const { userId } = await auth();
            if (!userId) throw new Error("Unauthorized");

            // whatever is returned here is accessible in onUploadComplete as "metadeta"
            return { userId };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            try {
                return { file: file.ufsUrl };
            } catch (error) {
                console.error("Error in onUploadComplete: ", error);
                throw error;
            }
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
