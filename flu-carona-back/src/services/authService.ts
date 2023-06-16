import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { signInError } from '@/errors';
import { SignInData } from '@/protocols';
import { userRepository } from '@/repositories';

async function signIn(signInData: SignInData): Promise<string> {
  const user = await userRepository.findByEmail(signInData.email);
  if (!user) throw signInError();

  const validPassword = await bcrypt.compare(signInData.password, user.password);
  if (!validPassword) throw signInError();

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });

  return token;
}

const authService = {
  signIn,
};

export { authService };
