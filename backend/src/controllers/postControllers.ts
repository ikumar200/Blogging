import { Request, Response} from "express";
import { createPost,getPostById,getAllPosts } from "../models/postModel";

// export const getPost=async(
//     req:Request<{ id: string }>,
//     res:Response):Promise<void>=>{

//     const {id}=req.params;
//     try{
//         const post=await getPostById(Number(id));
//         if(!post){
//             res.status(404).json({msg:"not found"});
//              return;
//             }
//         res.json(post);
//     }catch(err){
//         res.status(500).json({msg:err});
//     }
// };

export const getPost = async (req: Request<{id:string}>, res: Response):Promise<void> => {
    const { id } = req.params;
    try {
      const post = await getPostById(Number(id));
      if (!post){
        res.status(404).json({ message: "Post not found" });
        return }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  };

// Get all posts
export const getPosts = async (req: Request, res: Response) => {
    try {
      const posts = await getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export const addPost=async(req: Request, res: Response)=>{
        const {title,body,authorId}=req.body;
        try{
            const post =await createPost({title,body,authorId});
            res.status(200).json(post);
        }catch(err){
            res.status(500).json({ message: err });
        }
}