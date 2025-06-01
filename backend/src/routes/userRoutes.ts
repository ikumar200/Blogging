import { Router } from "express";
import { getUser, getUsers } from "../controllers/userControllers";
import { addUser } from "../controllers/authControllers";
import { validateUser } from "../middleware/validation";
import { authenticateJWT } from "../middleware/authentication";

const router = Router();



// Protected routes
router.get("/", authenticateJWT, getUsers);
router.get("/:id", authenticateJWT, getUser);

export default router;
