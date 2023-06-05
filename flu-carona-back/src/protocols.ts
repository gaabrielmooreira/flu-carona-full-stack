import { User } from "@prisma/client";

export type ApplicationError = {
  name: string,
  message: string,
};

export type CreateUserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;