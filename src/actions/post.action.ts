"use server"

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getDbUserId } from "./user.action";

export async function createPost(content : string, image: string) {
    try {
        const userId = await getDbUserId();

        const post = await prisma.post.create({
            data: {
                content,
                image,
                authorId: userId,
            }
        });

        revalidatePath("/"); // purge cache for homepage to show new post immediately
        return { success: true, post };

    } catch(error) {
        console.log("Error in createPost", error);
        return { success: false, error: "Failed to create post" };
    }

    }