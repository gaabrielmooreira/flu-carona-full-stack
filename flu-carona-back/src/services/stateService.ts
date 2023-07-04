import { badRequestError, notFoundError } from "@/errors";
import { cityRepository, stateRepository } from "@/repositories";
import { City, State } from "@prisma/client";

async function findAll(): Promise<State[]> {
  return await stateRepository.findAll();
}

async function findAllCitiesByStateId(stateId: number): Promise<City[]> {
  const state = await stateRepository.findById(stateId);
  if (!state) throw badRequestError('State does not exists.')

  const cities = await cityRepository.findAllByStateId(stateId);
  if (!cities) throw notFoundError('There is no city for this state.')
  return cities;
}

const stateService = {
  findAll,
  findAllCitiesByStateId,
};

export { stateService };
