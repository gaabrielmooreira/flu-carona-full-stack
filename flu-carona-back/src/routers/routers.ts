import { userRouter } from "@/routers/userRouter";
import { Router } from "express";

const routers = Router();

routers.use('/users', userRouter);

export { routers };