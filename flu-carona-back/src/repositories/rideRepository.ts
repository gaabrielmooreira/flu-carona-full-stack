import { Ride } from '@prisma/client';
import { prisma } from '@/configs';

async function create(data: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ride> {
  return await prisma.ride.create({ data });
}

async function findAll(): Promise<Ride[]> {
  return await prisma.ride.findMany();
}

const rideRepository = {
  create,
  findAll,
};

export { rideRepository };
