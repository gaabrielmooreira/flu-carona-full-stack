import { vehicleController } from "@/controllers";
import { authMiddleware, validateBody } from "@/middlewares";
import { createVehicleSchema } from "@/schemas";
import { Router } from "express";

const vehicleRouter = Router();

vehicleRouter
  .use('/*', authMiddleware)
  .post('/create', validateBody(createVehicleSchema), vehicleController.create)

export default vehicleRouter;
