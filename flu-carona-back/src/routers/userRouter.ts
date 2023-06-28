import { Router } from 'express';
import { userController } from '@/controllers';
import { authMiddleware, validateBody } from '@/middlewares';
import { signUpSchema } from '@/schemas';

const userRouter = Router();

userRouter
  .post('/sign-up', validateBody(signUpSchema), userController.signUp)
  .get('/vehicles', authMiddleware, userController.findUserWithVehicles);

export default userRouter;
