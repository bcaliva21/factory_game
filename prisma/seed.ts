
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// TODO: figure out how to make the highScores work with typescript
async function main() {
    const user1 = await prisma.user.create({
        data: {
          name: 'User 1',
          email: 'user1@example.com',
        },
      })
    
      const user2 = await prisma.user.create({
        data: {
          name: 'User 2',
          email: 'user2@example.com',
        },
      })
    
      // const highScores1 = await prisma.highScore.createMany({
      //   data: [
      //     { score: 100, userId: user1.id },
      //     { score: 200, userId: user1.id },
      //   ],
      // })
    
      // const highScores2 = await prisma.highScore.createMany({
      //   data: [
      //     { score: 150, userId: user2.id },
      //     { score: 250, userId: user2.id },
      //   ],
      // })
    
      // await prisma.user.update({
      //   where: { id: user1.id },
      //   data: { highScores: { connect: highScores1.map((score) => ({ id: score.id })) } },
      // })
    
      // await prisma.user.update({
      //   where: { id: user2.id },
      //   data: { highScores: { connect: highScores2.map((score) => ({ id: score.id })) } },
      // })
    
      console.log({ user1, user2 })
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