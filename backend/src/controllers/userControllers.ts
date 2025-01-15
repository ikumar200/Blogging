import { Request,Response } from "express";
import { createUser,getUserById,getAllUsers } from "../models/userModel";

export const getUser=async(req:Request<{id:string}>,res:Response):Promise<void>=>{
    const {id}=req.params;
    try{
        const user=await getUserById(Number(id));
        if(!user){
            res.sendStatus(404).json({msg:"User not found"});
            return }
        res.json(user);
    }catch(err){
        res.status(500).json({ message: err});
    }
};

export const getUsers=async(req:Request,res:Response)=>{
    try{
        const users=await getAllUsers();
        res.json(users);
    }catch(err){
        res.sendStatus(500).json({msg:err});
    }
};

export const  addUser=async(req:Request,res:Response)=>{
    const {name,email,password}=req.body;
    try{
        const user=await createUser({name,email,password});
        res.sendStatus(201).json(user);
    }catch(err){
        res.status(500).json({ message: err });
    }
}