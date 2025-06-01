import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { generateToken,verifyToken } from "../utils/jwt";

export interface MyJwtPayload {
  email: string;
  name?: string;
  userId?: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: MyJwtPayload | string;
    }
  }
}


export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized: Token missing or malformed" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next(); // continue to next middleware or route
  } catch (err) {
    res.status(403).json({ message: "Forbidden: Invalid or expired token" });
  }
};
