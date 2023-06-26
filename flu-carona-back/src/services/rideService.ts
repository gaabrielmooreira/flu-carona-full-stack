import { rideRepository } from "@/repositories";
import { Ride } from "@prisma/client";

async function create(data: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'> ): Promise<Ride> {
  return await rideRepository.create(data);
}

async function findAll() {
  return await rideRepository.findAll();
}

const rideService = {
  create,
  findAll,
};

export { rideService };
