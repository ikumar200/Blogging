// src/controllers/authController.ts
import { Request, Response } from "express";
import { register, login } from "../models/authModel";
import { generateToken } from "../utils/jwt";

export const addUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
  
    try {
      const user = await register({ name, email, password });
      const token = generateToken({ email: user.email, name: user.name });
      res.status(201).json({ user, token });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ message: "Registration failed", error: err.message });
      } else {
        res.status(500).json({ message: "Registration failed", error: "Unknown error" });
      }
    }
  };
  
  export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
  
    try {
      const user = await login({ email, password });
      const token = generateToken({ email: user.email, name: user.name });
      res.status(200).json({ user, token });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(401).json({ message: "Login failed", error: err.message });
      } else {
        res.status(401).json({ message: "Login failed", error: "Unknown error" });
      }
    }
  };
  