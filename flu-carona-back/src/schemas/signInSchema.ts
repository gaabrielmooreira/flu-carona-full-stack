import Joi from 'joi';
import { SignInData } from '@/protocols';

export const signInSchema = Joi.object<SignInData>({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
    .required(),
  password: Joi.string().min(6).required(),
});
