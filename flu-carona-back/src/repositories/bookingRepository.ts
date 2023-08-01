import { prisma } from "@/configs";
import { Booking } from "@prisma/client";

async function create(data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.booking.create({ data });
}

async function findAllBookedRidesByUserId(userId: number) {
  return await prisma.booking.findMany({
    include: {
      Ride: {
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
      },
    },
    where: { userId },
  });
}

const bookingRepository = {
  create,
  findAllBookedRidesByUserId,
};

export { bookingRepository };
