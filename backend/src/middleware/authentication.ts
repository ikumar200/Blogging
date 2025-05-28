import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const jwt_key = process.env.JWT_SECRET || "default_secret";

interface JwtPayload {
  email: string;
  name?: string;
  userId?: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
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
    const decoded = jwt.verify(token, jwt_key) as JwtPayload;
    req.user = decoded;
    next(); // continue to next middleware or route
  } catch (err) {
    res.status(403).json({ message: "Forbidden: Invalid or expired token" });
  }
};

// ✅ Utility function to generate JWT token
export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, jwt_key, {
    expiresIn: "1h", // Customize as needed
  });
};
