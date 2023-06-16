import { ApplicationError } from '@/protocols';

function duplicatedEmailError(): ApplicationError {
  return {
    name: 'DuplicatedEmailError',
    message: 'Email already in use!',
  };
}

export { duplicatedEmailError };
