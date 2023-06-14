import { CreateUserData } from "@/protocols";
import { userService } from "@/services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

async function signUp(req: Request, res: Response, next: NextFunction): Promise<Express.Response> {
  const createUserData = req.body as CreateUserData;
  try {
    await userService.signUp(createUserData);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}


const userController = {
  signUp,
};

export { userController };
