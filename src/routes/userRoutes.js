import { Router } from 'express'

import { createUserController } from '../controllers/createUserController.js';
import { findAllUserController } from '../controllers/findAllUsersController.js';
import { deleteUserController } from '../controllers/deleteUserController.js';
import { findUserController } from '../controllers/findUserController.js';
import { updateUserController } from '../controllers/updateUserController.js';

const route = Router()

route.get("/users", findAllUserController)
route.get("/user/:id", findUserController)
route.post("/user", createUserController)
route.put("/user/:id", updateUserController)
route.delete("/user/:id", deleteUserController)

export default route;