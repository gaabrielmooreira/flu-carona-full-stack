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

const vehicleController = {
  create,
};

export { vehicleController };
