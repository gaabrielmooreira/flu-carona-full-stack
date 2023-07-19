import { badRequestError, notFoundError, unauthorizedError } from "@/errors";
import { RideResponseWithAllInfo } from "@/protocols";
import { rideRepository, vehicleRepository, matchRepository, cityRepository, stadiumRepository, userRepository, stateRepository } from "@/repositories";
import { Ride } from "@prisma/client";

async function create({ userId, rideData }: { userId: number, rideData: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'> }): Promise<Ride> {
  const vehicle = await vehicleRepository.findById(rideData.vehicleId);
  if (!vehicle) throw notFoundError('Vehicle does not exists.');
  if (vehicle.userId !== userId) throw unauthorizedError();

  const match = await matchRepository.findById(rideData.matchId);
  if (!match) throw notFoundError('Match does not exists.');

  const startAdress = await cityRepository.findById(rideData.startAdressId);
  if (!startAdress) throw notFoundError('Start adress does not exists.');

  const dateStartRide = new Date(rideData.startAt);
  const validStartRide = (dateStartRide > new Date()) && (dateStartRide < new Date(match.time));
  console.log(match.time);
  console.log(dateStartRide);
  if (!validStartRide) throw badRequestError('startAt must be between now and matchStart')

  return await rideRepository.create(rideData);
}

async function findAll(): Promise<RideResponseWithAllInfo[]> {
  return await rideRepository.findAll();
}

async function findAllMyRides({ userId }: { userId: number }) {
  return await rideRepository.findAllMyRides(userId);
}

async function findById({ rideId }: { rideId: number }): Promise<RideResponseWithAllInfo> {
  if(isNaN(rideId)) throw badRequestError('rideId must be a number');

  const ride = await rideRepository.findById(rideId);
  if(!ride) throw notFoundError('Ride does not exists.');
  
  const match = await matchRepository.findById(ride.matchId);
  if (!match) throw notFoundError('Match does not exists.');

  const stadium = await stadiumRepository.findById(match.stadiumId);
  if (!stadium) throw notFoundError('Stadium does not exists');

  const vehicle = await vehicleRepository.findById(ride.vehicleId);
  if (!vehicle) throw notFoundError('Vehicle does not exists');

  const vehicleUser = await userRepository.findById(vehicle.userId);
  if (!vehicleUser) throw notFoundError('User does not exists');

  const city = await cityRepository.findById(ride.startAdressId);
  if (!city) throw notFoundError('City does not exists');

  const state = await stateRepository.findById(city.stateId);
  if (!state) throw notFoundError('State does not exists');


  const rideResponseWithAllInfo = {
    ...ride,
    Match: {
      ...match,
      Stadium: {
        id: stadium.id,
        name: stadium.name,
      },
    },
    City: {
      ...city,
      State: {
        id: state.id,
        uf: state.uf,
        name: state.name,
      },
    },
    Vehicle: {
      ...vehicle,
      User: {
        id: vehicleUser.id,
        name: vehicleUser.name,
        photo: vehicleUser.photo,
      },
    },
  }

  return rideResponseWithAllInfo;
}

const rideService = {
  create,
  findAll,
  findAllMyRides,
  findById,
};

export { rideService };
