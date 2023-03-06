
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const aj = await prisma.user.upsert({
    where: { email: 'aj@prisma.io' },
    update: {},
    create: {
      email: 'aj@prisma.io',
      name: 'AJ',
      highScores: {
        create: {
          score: 100
        },
      },
    },
  })
  const bradley = await prisma.user.upsert({
    where: { email: 'bradley@prisma.io' },
    update: {},
    create: {
      email: 'bradley@prisma.io',
      name: 'Bradley',
      highScores: {
        create: [
          {
            score: 200
          },
          {
            score: 300
          },
        ],
      },
    },
  })
  console.log({ aj, bradley })

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