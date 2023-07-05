import { Router } from 'express';
import userRouter from '@/routers/userRouter';
import authRouter from '@/routers/authRouter';
import vehicleRouter from '@/routers/vehicleRouter';
import rideRouter from '@/routers/rideRouter';
import bookingRouter from '@/routers/bookingRouter';
import matchRouter from '@/routers/matchRouter';
import stateRouter from '@/routers/stateRouter';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/auth', authRouter);
routers.use('/vehicles', vehicleRouter);
routers.use('/rides', rideRouter);
routers.use('/booking', bookingRouter);
routers.use('/matches', matchRouter);
routers.use('/states', stateRouter);

export { routers };
