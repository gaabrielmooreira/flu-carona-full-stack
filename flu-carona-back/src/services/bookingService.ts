import { badRequestError } from "@/errors";
import { CreateBookingData } from "@/protocols";
import { bookingRepository, paymentRepository, rideRepository } from "@/repositories";
import { Booking, Payment } from "@prisma/client";

async function create(data: CreateBookingData & { userId: number }): Promise<Booking> {
  const ride = await rideRepository.findById(data.rideId);
  if (!ride) throw badRequestError('Invalid ride');
  
  const payment = await paymentProcess(data);

  const booking = await bookingRepository.create({
    userId: data.userId,
    rideId: data.rideId,
    paymentId: payment.id,
  })

  return booking;
}

async function paymentProcess(data: Omit<CreateBookingData, 'rideId'>): Promise<Payment> {
  //fazer o pagamento
  //criar o pagamento
  const payment = await paymentRepository.create({
    value: data.value,
    cardIssuer: data.cardIssuer,
    cardLastDigits: data.cardNumber.slice(-4),
  });
  return payment;
}

const bookingService = {
  create,
};

export { bookingService };
