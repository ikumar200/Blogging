import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const createPost=async(data:{title:string; body:string; authorId:number})=>{
    return await prisma.post.create({
        data, 
    });
};

export const getPostById=async (id:number)=>{
    return await prisma.post.findUnique({
        where:{id},
    });
};

export const getAllPosts=async()=>{
    return await prisma.post.findMany({
        include:{author:true}
    })
}