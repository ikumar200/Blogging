import express from "express";
import cors from "cors"
import { authRoutes } from "./routes/authRoutes";
const app=express();

app.use(express.json());
app.use(cors());

app.use("/auth",authRoutes);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})