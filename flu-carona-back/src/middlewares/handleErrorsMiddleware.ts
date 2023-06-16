import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { ApplicationError } from '@/protocols';

export function handleErrorsMiddleware(err: ApplicationError | Error, _req: Request, res: Response) {
  if (err.name === 'SignInError') {
    return res.status(httpStatus.UNAUTHORIZED).send(err.message);
  }

  if (err.name === 'duplicatedEmailError') {
    return res.status(httpStatus.CONFLICT).send(err.message);
  }
}
