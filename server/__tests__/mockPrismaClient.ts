import { PrismaClient } from '@prisma/client';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    highScore: number;
    createdAt: Date;
}

const mock_users: User[] = [
    {
        createdAt: new Date(),
        email: 'alice@prisma.io',
        highScore: 300000,
        password: 'password',
        id: 1,
        name: 'alice',
    },
    {
        createdAt: new Date(),
        email: 'bob@prisma.io',
        highScore: 200000,
        password: 'password',
        id: 2,
        name: 'bob',
    },       
     {
        createdAt: new Date(),
        email: 'chris@prisma.io',
        highScore: 100000,
        password: 'password',
        id: 3,
        name: 'chris',
    },        
]

class MockPrismaClient {
    mockDataSource = {
        findMany: jest.fn(() => mock_users),
    }
}

const mockPrisma = new MockPrismaClient()

export class MockDataSource {
    async getMockData() {
        const result = await mockPrisma.mockDataSource.findMany()
        return result || null
    }
}

