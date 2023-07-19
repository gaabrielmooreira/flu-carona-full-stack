import { prisma } from "@/configs";
import { Stadium } from "@prisma/client";

async function findById(id: number): Promise<Stadium> {
  return await prisma.stadium.findUnique({ where: { id } });
}

async function findAll(): Promise<Stadium[]> {
  return await prisma.stadium.findMany();
}

const stadiumRepository = {
  findById,
  findAll,
};

export { stadiumRepository };
