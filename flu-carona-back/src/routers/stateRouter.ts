import { stateController } from "@/controllers";
import { Router } from "express";

const stateRouter = Router();

stateRouter
  .get('/', stateController.findAll)
  .get('/:id/cities', stateController.findAllCitiesByStateId);

export default stateRouter;
