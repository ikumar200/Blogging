import { Request, Response } from "express";
import { createUser, getUserById, getAllUsers } from "../models/userModel";
import { generateToken } from "../middleware/authentication";

export const getUser = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await getUserById(Number(id));
    if (!user) {
      res.status(404).json({ msg: "User not found" });
      return;
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  try {
    const user = await createUser({ name, email, password });

    // ✅ Generate token here
    const token = generateToken({
      email: user.email,
      name: user.name,
      userId: user.id,
    });

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "User creation failed", error: err });
  }
};