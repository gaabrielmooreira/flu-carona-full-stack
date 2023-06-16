import { Router } from 'express';
import { userController } from '@/controllers';
import { validateBody } from '@/middlewares';
import { signUpSchema } from '@/schemas';

const userRouter = Router();

userRouter.post('/sign-up', validateBody(signUpSchema), userController.signUp);

export default userRouter;
