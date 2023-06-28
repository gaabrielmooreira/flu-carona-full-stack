import { CreateVehicleData } from "@/protocols";
import { vehicleRepository } from "@/repositories";
import { Vehicle } from "@prisma/client";

async function create(data: CreateVehicleData & { userId: number }): Promise<Vehicle> {
  return await vehicleRepository.create(data);
}

const vehicleService = {
  create,
};

export { vehicleService };
