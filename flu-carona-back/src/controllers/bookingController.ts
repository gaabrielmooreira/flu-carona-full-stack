import { AuthenticatedRequest, CreateBookingData } from '@/protocols';
import { bookingService } from '@/services';
import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

async function create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const userId = req.userId;
  const bookingData = req.body as CreateBookingData;
  try {
    await bookingService.create({ userId, ...bookingData });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

const bookingController = {
  create,
};

export { bookingController };
