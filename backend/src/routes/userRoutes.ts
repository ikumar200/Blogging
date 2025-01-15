import { Router } from "express";
import { addUser,getUser,getUsers } from "../controllers/userControllers";
import { validatePost, validateUser } from "../middleware/validation";

const router=Router();

router.get("/",getUsers);
router.get("/:id",getUser);
router.post("/",validateUser,addUser);

export default router;