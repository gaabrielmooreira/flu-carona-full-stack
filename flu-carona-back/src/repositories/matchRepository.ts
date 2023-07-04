import { prisma } from "@/configs";

async function findById(id: number) {
  return await prisma.match.findUnique({ where: { id } });
}

const matchRepository = {
  findById,
};

export { matchRepository };
