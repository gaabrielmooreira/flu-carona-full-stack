import bcrypt from 'bcrypt';
import { CreateUserData } from '@/protocols';
import { userRepository } from '@/repositories';
import { User, Vehicle } from '@prisma/client';
import { notFoundError } from '@/errors';

async function signUp(createUserData: CreateUserData): Promise<void> {
  const { name, photo, email, password } = createUserData;

  const userExists = await userRepository.findByEmail(email);
  if (userExists) throw new Error();

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepository.create({ name, photo, email, password: hashPassword });
}

async function findUserWithVehicles(userId: number): Promise<Pick<User, 'id' | 'name' | 'photo' | 'email'> & { Vehicles: Vehicle[] }> {
  const user = await userRepository.findUserWithVehicles(userId);
  if(!user) throw notFoundError('user not found');
  
  const userResponse = {
    id: user.id,
    name: user.name,
    photo: user.photo,
    email: user.email,
    Vehicles: user.Vehicle,
  }
  
  return userResponse;
}

const userService = {
  signUp,
  findUserWithVehicles,
};

export { userService };
