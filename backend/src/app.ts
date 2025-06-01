import express, { Application } from "express";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import commentRoutes from "./routes/commentRoutes";

const app: Application = express();

app.use(express.json());

// authentication routes
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);
app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/comments",commentRoutes);

export default app;
