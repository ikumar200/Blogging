import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { MyJwtPayload } from "../middleware/authentication"; // adjust path if different
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET!

interface TokenPayload {
    email: string;
    name: string;
  }

export const generateToken=({email,name}:TokenPayload)=>{
    return jwt.sign({email,name},JWT_SECRET)
}

export const verifyToken=(token:string):MyJwtPayload=>{
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        return decoded as MyJwtPayload;
    }catch(err){
        throw new Error("invalid or expired token");
    }
}