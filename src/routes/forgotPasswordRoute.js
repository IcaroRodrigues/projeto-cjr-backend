import { Router } from 'express';

import { resetPasswordController } from '../controllers/resetPassword/resetPasswordController.js';

const forgotPasswordRoute = Router();

forgotPasswordRoute.post('/reset-password', resetPasswordController);

export default forgotPasswordRoute;
