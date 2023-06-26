import { Router } from 'express'
import { createUserController } from '../controllers/createUserController.js';
import { findAllUserController } from '../controllers/findAllUsersController.js';

const route = Router()

route.post("/user", createUserController)
route.get("/users", findAllUserController)


export default route;