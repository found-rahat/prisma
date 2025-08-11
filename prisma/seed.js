import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
  // single user insert
  const InsertUser = await prisma.user.create({
    data: {
      email: "r@gmail.com",
      name: "rahat",
      mark: 10,
    },
  });
};
console.log(InsertUser);

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
