import { Router } from 'express';
import userRouter from '@/routers/userRouter';
import authRouter from '@/routers/authRouter';
import vehicleRouter from '@/routers/vehicleRouter';
import rideRouter from '@/routers/rideRouter';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/auth', authRouter);
routers.use('/vehicles', vehicleRouter);
routers.use('/rides', rideRouter);

export { routers };
