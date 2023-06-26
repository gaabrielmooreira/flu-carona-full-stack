import { prisma } from "@/configs";
import { Booking } from "@prisma/client";

async function create(data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.booking.create({ data });
}

const bookingRepository = {
  create,
};

export { bookingRepository };
