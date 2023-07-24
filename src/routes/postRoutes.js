import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware.js';

import {
  createPostController,
  updatePostController,
  deletePostController,
  findAllPostsController,
  findPostController,
} from '../controllers/Post';

const postRoute = Router();

postRoute.post("/", authMiddleware, createPostController);
postRoute.put("/:id", authMiddleware, updatePostController);

postRoute.delete("/:id", authMiddleware, deletePostController);

postRoute.get("/", findAllPostsController);
postRoute.get("/:id", findPostController);

export default postRoute;
