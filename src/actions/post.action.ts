"use server";

import prisma from "@/lib/prisma";
import { getDatabaseUserId } from "./user.action";
import { revalidatePath } from "next/cache";
import { error } from "console";

export const createPost = async (content: string, imageUrl: string) => {
    try {
        const userId = await getDatabaseUserId();
        const post = await prisma.post.create({
            data: {
                content,
                image: imageUrl,
                authorId: userId,
            },
        });

        revalidatePath("/"); //purge the cache for the home page
        return { success: true, post };
    } catch {
        console.log("Failed to create post: ", error);
        return { success: false, error: "Failed to create post" };
    }
};
