import { prisma } from '@/configs';
import { Payment } from '@prisma/client';

async function create(data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.payment.create({ data });
}

const paymentRepository = {
  create,
};

export { paymentRepository };
