import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '@/protocols';

export function handleErrorsMiddleware(err: ApplicationError | Error, _req: Request, res: Response, _next: NextFunction) {
  if (['SignInError', 'UnauthorizedError'].includes(err.name)) {
    return res.status(httpStatus.UNAUTHORIZED).send(err.message);
  }

  if (err.name === 'DuplicatedEmailError') {
    return res.status(httpStatus.CONFLICT).send(err.message);
  }

  if (err.name === 'BadRequestError') {
    return res.status(httpStatus.BAD_REQUEST).send(err.message);
  }

  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send(err.message);
  }
}
