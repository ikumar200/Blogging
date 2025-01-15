import {z} from "zod";

export const createPostSchema=z.object({
    title:z.string().min(1,"title is required"),
    body:z.string().min(1,"content is req"),
    authorId: z.number(),
})

export const updatePostSchema=z.object({
    title:z.string().optional(),
    body:z.string().optional(),
});