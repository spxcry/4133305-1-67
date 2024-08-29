import { PrismaClient } from "@prisma/client";
import { hash, hashSync } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, name, password } = await req.json();
    //const hashedPassword = await hash(password,10);
    const hashedPassword = hashSync(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return Response.json({
      msg: "user create !",
      newUser,
    });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
