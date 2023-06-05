import { userController } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signUpSchema } from "@/schemas";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/sign-up', validateBody(signUpSchema), userController.signUp);

export { userRouter };