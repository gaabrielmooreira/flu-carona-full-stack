import { bookingController } from "@/controllers";
import { authMiddleware, validateBody } from "@/middlewares";
import { bookingSchema } from "@/schemas/bookingSchema";
import { Router } from "express";

const bookingRouter = Router();

bookingRouter.use('/*', authMiddleware)
  .post('/', validateBody(bookingSchema), bookingController.create);

export default bookingRouter;
