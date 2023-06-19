import { vehicleController } from "@/controllers";
import { authMiddleware } from "@/middlewares";
import { Router } from "express";

const vehicleRouter = Router();

vehicleRouter
  .use('/*', authMiddleware)
  .post('/create', vehicleController.create)
  .get('/user-vehicles', vehicleController.findAllByUserId);

export default vehicleRouter;
