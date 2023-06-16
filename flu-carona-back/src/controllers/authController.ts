import { NextFunction, Request, Response } from 'express';
import { SignInData } from '@/protocols';
import { authService } from '@/services';

async function signIn(req: Request, res: Response, next: NextFunction): Promise<Response> {
  const signInData: SignInData = req.body;

  try {
    const token = await authService.signIn(signInData);
    return res.send(token);
  } catch (error) {
    next(error);
  }
}

const authController = {
  signIn,
};

export { authController };
