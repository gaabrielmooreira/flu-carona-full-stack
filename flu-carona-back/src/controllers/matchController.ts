import { AuthenticatedRequest } from '@/protocols';
import { matchService } from '@/services';
import { NextFunction, Response } from 'express';

async function findAll(_req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const matches = await matchService.findAll();
    return res.send(matches);
  } catch (error) {
    next(error);
  }
}

const matchController = {
  findAll,
};

export { matchController };
