import express, { Application } from "express";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

export default app;
