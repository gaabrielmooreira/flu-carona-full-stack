import { Ride } from '@prisma/client';
import { prisma } from '@/configs';

async function create(data: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ride> {
  return await prisma.ride.create({ data });
}

async function findAll(): Promise<Ride[]> {
  return await prisma.ride.findMany();
}

async function findById(id: number): Promise<Ride> {
  return await prisma.ride.findFirst({ where: { id } });
}

const rideRepository = {
  create,
  findAll,
  findById,
};

export { rideRepository };
