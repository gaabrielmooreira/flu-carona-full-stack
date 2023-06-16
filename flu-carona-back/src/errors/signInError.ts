import { ApplicationError } from '@/protocols';

function signInError(): ApplicationError {
  return {
    name: 'SignInError',
    message: 'Email or password is incorrect',
  };
}

export { signInError };
