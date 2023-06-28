import { ApplicationError } from '@/protocols';

function notFoundError(message: string): ApplicationError {
  return {
    name: 'NotFoundError',
    message,
  };
}

export { notFoundError };
