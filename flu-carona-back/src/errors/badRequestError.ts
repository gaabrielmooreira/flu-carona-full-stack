import { ApplicationError } from '@/protocols';

function badRequestError(message: string): ApplicationError {
  return {
    name: 'BadRequestError',
    message,
  };
}

export { badRequestError };