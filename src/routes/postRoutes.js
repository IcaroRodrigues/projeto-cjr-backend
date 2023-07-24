import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware.js';

import { createPostController } from '../controllers/Post/createPostController.js'
import { updatePostController } from '../controllers/Post/updatePostController.js'
import { deletePostController } from '../controllers/Post/deletePostController.js'
import { findAllPostsController } from '../controllers/Post/findAllPostsController.js'
import { findPostController } from '../controllers/Post/findPostController.js'
  
const postRoute = Router();

postRoute.post("/post", authMiddleware, createPostController);
postRoute.put("/post/:id", authMiddleware, updatePostController);

postRoute.delete("/post/:id", authMiddleware, deletePostController);

postRoute.get("/posts", findAllPostsController);
postRoute.get("/post/:id", findPostController);

export default postRoute;
