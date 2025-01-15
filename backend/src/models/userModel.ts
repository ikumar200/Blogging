import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

export const createUser=async (data:{name:string; email:string; password:string})=>{
    return await prisma.user.create({
        data,
    });
};

export const getUserById=async (id:number)=>{
    return await prisma.user.findUnique({
        where:{id},
    });
};

export const getAllUsers=async ()=>{
    return await prisma.user.findMany();
}