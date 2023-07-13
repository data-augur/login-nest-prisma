import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';


async function main() {
  const prisma = new PrismaClient();
  console.log('\n ....  Seeding Users ....');

  const saltOrRounds = 10;
  var Users =[{email: "sarfraz@test.com", password: await bcrypt.hash("pass", saltOrRounds)},
              {email: "sarfraz2@test.com", password: await bcrypt.hash("pass2", saltOrRounds)},
              {email: "sarfraz3@test.com", password: await bcrypt.hash("pass3", saltOrRounds)},
              {email: "sarfraz4@test.com", password: await bcrypt.hash("pass4", saltOrRounds)},
              {email: "sarfraz5@test.com", password: await bcrypt.hash("pass5", saltOrRounds)},]

  const resp = await prisma.user.createMany({data:Users})
  console.log(resp)


  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {});
