import { prisma } from "@/configs";

async function findById(id: number) {
  return await prisma.city.findUnique({ where: { id } });
}

const cityRepository = {
  findById,
};

export { cityRepository };
