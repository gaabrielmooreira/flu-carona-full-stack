import bcrypt from 'bcrypt';
import { CreateUserData } from '@/protocols';
import { userRepository } from '@/repositories';

async function signUp(createUserData: CreateUserData): Promise<void> {
  const { name, photo, email, password } = createUserData;

  const userExists = await userRepository.findByEmail(email);
  if (userExists) throw new Error();

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepository.create({ name, photo, email, password: hashPassword });
}

const userService = {
  signUp,
};

export { userService };
