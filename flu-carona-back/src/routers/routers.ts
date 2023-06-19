import { Router } from 'express';
import userRouter from '@/routers/userRouter';
import authRouter from '@/routers/authRouter';
import vehicleRouter from '@/routers/vehicleRouter';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/auth', authRouter);
routers.use('/vehicle', vehicleRouter);

export { routers };
