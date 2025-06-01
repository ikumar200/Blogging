import { Router } from "express";
import { addUser,loginUser } from "../controllers/authControllers"
import { validateUser } from "../middleware/validation";

const router = Router();

router.post("/register",validateUser,addUser);
router.post("/login",loginUser);

export default router;