import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware.js';

import { createCommentController } from '../controllers/Comment/createCommentController.js';
import { updateCommentController } from '../controllers/Comment/updateCommentController.js';
import { deleteCommentController } from '../controllers/Comment/deleteCommentController.js';
import { findAllCommentsController } from '../controllers/Comment/findAllCommentsController.js';
import { findCommentController } from '../controllers/Comment/findCommentController.js';

const commentRoute = Router();

commentRoute.post('/comment', authMiddleware, createCommentController);
commentRoute.put('/comment/:id', authMiddleware, updateCommentController);

commentRoute.delete('/comment/:id', authMiddleware, deleteCommentController);

commentRoute.get('/comments', findAllCommentsController);
commentRoute.get('/comment/:id', findCommentController);

export default commentRoute;
