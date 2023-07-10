import { badRequestError } from "@/errors";
import { CreateBookingData } from "@/protocols";
import { bookingRepository, paymentRepository, rideRepository } from "@/repositories";
import { Booking, Payment } from "@prisma/client";

async function create(data: CreateBookingData & { userId: number }): Promise<Booking> {
  const ride = await rideRepository.findById(data.rideId);
  if (!ride) throw badRequestError('Invalid ride');
  if (ride.seats <= 0) throw badRequestError('This ride is full.');

  const payment = await paymentProcess(ride.price, data);
  await rideRepository.updateSeats(1, ride);
  const booking = await bookingRepository.create({
    userId: data.userId,
    rideId: data.rideId,
    paymentId: payment.id,
  })

  return booking;
}

async function paymentProcess(value: number, data: Omit<CreateBookingData, 'rideId'>): Promise<Payment> {
  //fazer o pagamento
  //guardar o pagamento no banco de dados
  const payment = await paymentRepository.create({
    value,
    cardIssuer: data.cardIssuer,
    cardLastDigits: data.cardNumber.slice(-4),
  });
  return payment;
}

const bookingService = {
  create,
};

export { bookingService };
