import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   const rideRequest = await prisma.rideRequest.create({
//     data: {
//       reqID: '1',
//       from: 'Varsity Gate',
//       to: 'Pathantula',
//       budget: 10,
//       status: 'available',
//     },
//   })
//   console.log(rideRequest)
// }

async function main() {
    const rideRequest = await prisma.rideRequest.findMany()
    console.log(rideRequest)
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

