import { CreateBookingData } from "@/protocols";
import Joi from "joi";

export const bookingSchema = Joi.object<CreateBookingData>({
  rideId: Joi.number().required(),
  cardName: Joi.string().required(),
  cardIssuer: Joi.string().required(),
  cardNumber: Joi.string().length(16).required(),
  expirationDate: Joi.string().required(),
  cvv: Joi.number().required(),
});

