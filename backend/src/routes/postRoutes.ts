import {Router} from "express";
import { addPost,getPost,getPosts } from "../controllers/postControllers";
import { validatePost } from "../middleware/validation";

const router=Router();

router.get("/",getPosts);
router.get("/:id",getPost);
router.post("/",validatePost,addPost);

export default router;