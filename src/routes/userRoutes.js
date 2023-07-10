import { Router } from 'express'

import { createUserController } from '../controllers/User/createUserController.js';
import { findAllUserController } from '../controllers/User/findAllUsersController.js';
import { deleteUserController } from '../controllers/User/deleteUserController.js';
import { findUserController } from '../controllers/User/findUserController.js';
import { updateUserController } from '../controllers/User/updateUserController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const userRoute = Router()

userRoute.get("/users", findAllUserController)
userRoute.get("/user/:id", findUserController)

userRoute.post("/user", createUserController)
userRoute.put("/user/:id", authMiddleware, updateUserController)

userRoute.delete("/user/:id", authMiddleware, deleteUserController)

export default userRoute;