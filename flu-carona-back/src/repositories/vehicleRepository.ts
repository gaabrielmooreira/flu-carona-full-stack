import { Vehicle } from '@prisma/client';
import { prisma } from '@/configs';

async function create(data: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<Vehicle> {
  return await prisma.vehicle.create({ data });
}

async function findAllByUserId({ userId }: Pick<Vehicle, 'userId'>): Promise<Vehicle[]> {
  return await prisma.vehicle.findMany({ where: { userId } });
}

const vehicleRepository = {
  create,
  findAllByUserId,
};

export { vehicleRepository };
