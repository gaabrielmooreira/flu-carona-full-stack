import { matchController } from "@/controllers";
import { authMiddleware } from "@/middlewares";
import { Router } from "express";

const matchRouter = Router();

matchRouter
  .use('/*', authMiddleware)
  .get('/', matchController.findAll);

export default matchRouter;
