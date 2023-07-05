import { badRequestError } from '@/errors';
import { AuthenticatedRequest } from '@/protocols';
import { stateService } from '@/services/stateService';
import { NextFunction, Response } from 'express';

async function findAll(_req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const states = await stateService.findAll();
    return res.send(states);
  } catch (error) {
    next(error);
  }
}

async function findAllCitiesByStateId(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const stateId = Number(req.params.id) as number;
    if(!stateId) throw badRequestError('stateId must be a number');
    const cities = await stateService.findAllCitiesByStateId(stateId);
    return res.send(cities);
  } catch (error) {
    next(error);
  }
}

const stateController = {
  findAll,
  findAllCitiesByStateId,
};

export { stateController };
