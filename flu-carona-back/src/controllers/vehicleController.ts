import { AuthenticatedRequest, CreateVehicleData } from '@/protocols';
import { vehicleService } from '@/services';
import { NextFunction, Response } from 'express';

async function create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const vehicleData = req.body as CreateVehicleData;
  try {
    const vehicle = await vehicleService.create({ userId, ...vehicleData });
    return res.send(vehicle);
  } catch (error) {
    next(error);
  }
}

async function findAllByUserId(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;

  try {
    const vehicles = await vehicleService.findAllByUserId({ userId });
    return res.send(vehicles);
  } catch (error) {
    next(error);
  }
}

const vehicleController = {
  create,
  findAllByUserId,
};

export { vehicleController };
