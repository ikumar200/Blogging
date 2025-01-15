import { Request,Response,NextFunction } from "express";
import { createPostSchema } from "../validations/postValidation";
import { createUserSchema } from "../validations/userValidation";

export const validatePost=(req:Request,res:Response,next:NextFunction)=>{
    try{
        createPostSchema.parse(req.body);
        next();
    }catch(err){
        res.status(400).json({msg: err});
    }
};

export const validateUser=(req:Request,res:Response,next:NextFunction)=>{
    try{
        createUserSchema.parse(req.body);
        next();
    }catch(err){
        res.status(400).json({msg:err})
    };
};