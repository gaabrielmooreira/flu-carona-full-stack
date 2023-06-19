import { AuthenticatedRequest } from '@/protocols';
import { rideService } from '@/services';
import { NextFunction, Response } from 'express';

async function create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const rideData = req.body;
  try {
    const ride = await rideService.create({ userId, ...rideData });
    return res.send(ride);
  } catch (error) {
    next(error);
  }
}

async function findAll(_req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const rides = await rideService.findAll();
    return res.send(rides);
  } catch (error) {
    next(error);
  }
}

const rideController = {
  create,
  findAll,
};

export { rideController };
