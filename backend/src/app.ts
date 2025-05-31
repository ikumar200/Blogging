import express, { Application } from "express";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";

const app: Application = express();


app.use(express.json());

// authentication routes
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);
app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/comments",commentRoutes);

export default app;
