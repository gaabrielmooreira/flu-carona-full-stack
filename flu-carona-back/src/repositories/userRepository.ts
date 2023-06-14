import { prisma } from "@/configs";
import { CreateUserData } from "@/protocols";
import { User } from "@prisma/client";

async function create(data: CreateUserData): Promise<User> {
  return await prisma.user.create({ data });
}

async function findByEmail(email: string): Promise<User> {
  return await prisma.user.findUnique({
    where: { email }
  });
}

const userRepository = {
  create,
  findByEmail,
};

export { userRepository };