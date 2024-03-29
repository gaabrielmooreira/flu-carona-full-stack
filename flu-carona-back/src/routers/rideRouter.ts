import { rideController } from "@/controllers";
import { authMiddleware, validateBody } from "@/middlewares";
import { createRideSchema } from "@/schemas/createRideSchema";
import { Router } from "express";

const rideRouter = Router();

rideRouter
  .use('/*', authMiddleware)
  .post('/create', validateBody(createRideSchema), rideController.create)
  .get('/', rideController.findAll)
  .get('/my-rides', rideController.findAllMyRides)
  .get('/:rideId', rideController.findById);
  
export default rideRouter;
