import { User } from '@prisma/client';
import { prisma } from '@/configs';
import { CreateUserData } from '@/protocols';

async function create(data: CreateUserData): Promise<User> {
  return await prisma.user.create({ data });
}

async function findByEmail(email: string): Promise<User> {
  return await prisma.user.findUnique({
    where: { email },
  });
}

async function findUserWithVehicles(id: number) {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      photo: true,
      Vehicle: true,
    },
  })
}

const userRepository = {
  create,
  findByEmail,
  findUserWithVehicles,
};

export { userRepository };
