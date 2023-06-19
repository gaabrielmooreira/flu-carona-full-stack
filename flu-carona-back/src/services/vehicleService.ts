import { CreateVehicleData } from "@/protocols";
import { vehicleRepository } from "@/repositories";
import { Vehicle } from "@prisma/client";

async function create(data: CreateVehicleData & { userId: number }): Promise<Vehicle> {
  return await vehicleRepository.create(data);
}

async function findAllByUserId({ userId }: Pick<Vehicle, 'userId'>): Promise<Vehicle[]> {
  return await vehicleRepository.findAllByUserId({ userId });
}

const vehicleService = {
  create,
  findAllByUserId,
};

export { vehicleService };
