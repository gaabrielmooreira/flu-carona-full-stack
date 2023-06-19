import httpStatus from "http-status";
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest, JWTPayload } from "@/protocols";
import { NextFunction, Response } from "express";
import { unauthorizedError } from "@/errors";

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(' ')[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { userId } = jwt.verify(token, process.env.SECRET_KEY) as JWTPayload;

    req.userId = userId;
    next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export { authMiddleware };
