import { Router } from 'express';
import { authController } from '@/controllers';
import { validateBody } from '@/middlewares';
import { signInSchema } from '@/schemas/signInSchema';

const authRouter = Router();

authRouter.post('/sign-in', validateBody(signInSchema), authController.signIn);

export default authRouter;
