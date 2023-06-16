import { Router } from 'express';
import userRouter from '@/routers/userRouter';
import authRouter from '@/routers/authRouter';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/auth', authRouter);

export { routers };
