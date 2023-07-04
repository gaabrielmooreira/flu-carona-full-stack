import { matchRepository } from "@/repositories";
import { Match } from "@prisma/client";

async function findAll(): Promise<Match[]> {
  return await matchRepository.findAllAfterDate(new Date());
}

const matchService = {
  findAll,
};

export { matchService };
