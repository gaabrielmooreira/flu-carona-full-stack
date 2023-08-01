import { AuthenticatedRequest } from '@/protocols';
import { rideService } from '@/services';
import { Ride } from '@prisma/client';
import { NextFunction, Response } from 'express';

async function create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const rideData = req.body as Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>;

  try {
    const ride = await rideService.create({ userId, rideData });
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

async function findAllMyRides(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;

  try {
    const rides = await rideService.findAllMyRides({ userId });
    return res.send(rides);
  } catch (error) {
    next(error);
  }
}

async function findById(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const rideId = req.params.rideId as string;

  try {
    const ride = await rideService.findById({ rideId: Number(rideId) });
    return res.send(ride);
  } catch (error) {
    next(error);
  }
}

const rideController = {
  create,
  findAll,
  findAllMyRides,
  findById,
};

export { rideController };
