import { CreateVehicleData } from "@/protocols";
import Joi from "joi";

export const createVehicleSchema = Joi.object<CreateVehicleData>({
  description: Joi.string().required(),
  model: Joi.string().required(),
  brand: Joi.string().required(),
  capacity: Joi.number().min(0).max(6).required(),
  image: Joi.string().required(),
});