import { prisma } from "@/configs";
import { City } from "@prisma/client";

async function findById(id: number): Promise<City> {
  return await prisma.city.findUnique({ where: { id } });
}

async function findAllByStateId(stateId: number): Promise<City[]> {
  return await prisma.city.findMany({ where: { stateId } })
}

const cityRepository = {
  findById,
  findAllByStateId,
};

export { cityRepository };
