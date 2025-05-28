import { Router } from "express";
import { addUser, getUser, getUsers } from "../controllers/userControllers";
import { validateUser } from "../middleware/validation";
import { authenticateJWT } from "../middleware/authentication";

const router = Router();

// Public route: Register user
router.post("/", validateUser, addUser);

// Protected routes
router.get("/", authenticateJWT, getUsers);
router.get("/:id", authenticateJWT, getUser);

export default router;
