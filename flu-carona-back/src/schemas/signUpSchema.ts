import { CreateUserData } from "@/protocols";
import Joi from "joi";

export const signUpSchema = Joi.object<CreateUserData & { confirmPassword: string }>({
  name: Joi.string().min(3).required(),
  photo: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "br"] } }).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref('password'),
});