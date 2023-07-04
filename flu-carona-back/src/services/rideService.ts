import { badRequestError, notFoundError, unauthorizedError } from "@/errors";
import { rideRepository, vehicleRepository, matchRepository, cityRepository } from "@/repositories";
import { Ride } from "@prisma/client";

async function create({ userId, rideData }: { userId: number, rideData: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'> }): Promise<Ride> {
  const vehicle = await vehicleRepository.findById(rideData.vehicleId);
  if(!vehicle) throw notFoundError('Vehicle does not exists.');
  if(vehicle.userId !== userId) throw unauthorizedError();

  const match = await matchRepository.findById(rideData.matchId);
  if(!match) throw notFoundError('Match does not exists.');
  
  const startAdress = await cityRepository.findById(rideData.startAdressId);
  if(!startAdress) throw notFoundError('Start adress does not exists.'); 

  const dateStartRide = new Date(rideData.startAt);
  const validStartRide = (dateStartRide > new Date()) && (dateStartRide < new Date(match.time));
  if(!validStartRide) throw badRequestError('startAt must be between now and matchStart')

  return await rideRepository.create(rideData);
}

async function findAll() {
  return await rideRepository.findAll();
}

const rideService = {
  create,
  findAll,
};

export { rideService };
