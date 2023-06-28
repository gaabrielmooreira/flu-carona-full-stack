import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest, CreateUserData } from '@/protocols';
import { userService } from '@/services';

async function signUp(req: Request, res: Response, next: NextFunction): Promise<Express.Response> {
  const createUserData = req.body as CreateUserData;
  try {
    await userService.signUp(createUserData);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

async function findUserWithVehicles(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const userId = req.userId;
  try {
    const result = await userService.findUserWithVehicles(userId);
    return res.send(result);
  } catch (error) {
    next(error);
  }
}

const userController = {
  signUp,
  findUserWithVehicles,
};

export { userController };
