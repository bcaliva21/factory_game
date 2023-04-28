
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const walter = await prisma.user.upsert({
    where: { email: 'walter@prisma.io' },
    update: {},
    create: {
      email: 'walter@prisma.io',
      password: 'password',
      name: 'Walter',
      highScore: 0 // he hasnt gotten to it yet
    },
  })
  const aj = await prisma.user.upsert({
    where: { email: 'aj@prisma.io' },
    update: {},
    create: {
      email: 'aj@prisma.io',
      password: 'password',
      name: 'AJ',
      highScore: 100
    },
  })
  const bradley = await prisma.user.upsert({
    where: { email: 'bradley@prisma.io' },
    update: {},
    create: {
      email: 'bradley@prisma.io',
      password: 'password',
      name: 'Bradley',
      highScore: 200
    }
  })
  console.log({ walter, aj, bradley })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
