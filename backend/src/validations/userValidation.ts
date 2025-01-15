import { z } from "zod";


export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password:z.string().min(6,"enter min 6 char")
});


export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  password:z.string().optional(),
});