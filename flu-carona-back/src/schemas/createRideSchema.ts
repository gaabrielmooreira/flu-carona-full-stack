import { CreateRideData } from "@/protocols";
import Joi from "joi";

export const createRideSchema = Joi.object<CreateRideData>({
  description: Joi.string().required(),
  price: Joi.number().required(),
  seats: Joi.number().min(1).max(6).required(),
  startAdressId: Joi.number().required(),
  matchId: Joi.number().required(),
  startAt: Joi.date().required(),
  returnAt: Joi.date(),
  vehicleId: Joi.number().required(),
});