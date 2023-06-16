import { ApplicationError } from '@/protocols';

function invalidDataError(details: string[]): ApplicationInvalidDataError {
  return {
    name: 'InvalidDataError',
    message: 'Invalid Data!',
    details,
  };
}

type ApplicationInvalidDataError = ApplicationError & {
  details: string[];
};

export { invalidDataError };
