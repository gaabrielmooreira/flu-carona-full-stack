import { Ride } from '@prisma/client';
import { prisma } from '@/configs';

async function create(data: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ride> {
  return await prisma.ride.create({ data });
}

async function findAll() {
  return await prisma.ride.findMany({
    include: {
      Match: {
        include: {
          Stadium: {
            select: {
              id: true,
              name: true,
            }
          },
        }
      },
      Vehicle: {
        include: {
          User: {
            select: {
              id: true,
              name: true,
              photo: true,
            }
          },
        }
      },
      City: {
        include: {
          State: true,
        }
      },
    }
  });
}

async function findById(id: number): Promise<Ride> {
  return await prisma.ride.findFirst({ where: { id } });
}

async function findAllMyRides(userId: number) {
  return await prisma.ride.findMany({
    include: {
      Match: {
        include: {
          Stadium: {
            select: {
              id: true,
              name: true,
            }
          },
        }
      },
      Vehicle: {
        include: {
          User: {
            select: {
              id: true,
              name: true,
              photo: true,
            }
          },
        }
      },
      City: {
        include: {
          State: true,
        }
      },
    },
    where: {
      Vehicle:{
        User: {
          id: userId
        }
      }
    },
  });
}

const rideRepository = {
  create,
  findAll,
  findById,
  findAllMyRides,
};

export { rideRepository };
