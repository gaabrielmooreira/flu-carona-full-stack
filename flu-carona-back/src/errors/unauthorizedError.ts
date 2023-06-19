import { ApplicationError } from '@/protocols';

function unauthorizedError(): ApplicationError {
  return {
    name: 'UnauthorizedError',
    message: 'You must be signed in to continue',
  };
}

export { unauthorizedError };
