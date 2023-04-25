import sinon from 'sinon';
import { PrismaClient } from '@prisma/client';

export const createPrismaMock = (): PrismaClient => {
  const prismaMock: PrismaClient = new PrismaClient();

  // Mock all Prisma model methods
  Object.keys(prismaMock).forEach((model: string) => {
    Object.keys(prismaMock[model]).forEach((method: string) => {
      prismaMock[model][method] = sinon.stub();
    });
  });

  return prismaMock;
};

