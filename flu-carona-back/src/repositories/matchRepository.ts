import { prisma } from "@/configs";
import { Match } from "@prisma/client";

async function findById(id: number) {
  return await prisma.match.findUnique({ where: { id } });
}

async function findAllAfterDate(date: Date): Promise<Match[]> {
  return await prisma.match.findMany({
    where: {
      date: {
        gte: date,
      },
    },
  });
}

const matchRepository = {
  findById,
  findAllAfterDate,
};

export { matchRepository };
