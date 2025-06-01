import { Request, Response } from "express";
import { createUser, getUserById, getAllUsers } from "../models/userModel";
import { generateToken } from "../utils/jwt"

export const getUser = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await getUserById(Number(id));
    if (!user) {
      res.status(404).json({ msg: "User not found" });
      return;
    }
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    const usersWithoutPasswords = users.map(({ password, ...rest }) => rest);
    res.json(usersWithoutPasswords);
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err });
  }
};