import { prisma } from "@/configs";
import { State } from "@prisma/client";

async function findById(id: number): Promise<State> {
  return await prisma.state.findUnique({ where: { id } });
}
async function findAll(): Promise<State[]> {
  return await prisma.state.findMany();
}

const stateRepository = {
  findById,
  findAll,
};

export { stateRepository };
