import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt'
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function criarConta(user: string, password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Gera hash da senha

    await prisma.user.create({
      data: {
        user,
        password: hashedPassword,
      }
    });

    console.log('Usuário criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuário:'); // Loga apenas a mensagem
    throw new Error('Erro ao criar usuário');
  } finally {
    await prisma.$disconnect();
  }

  redirect('/login')
}

const Auth = {
  criarConta,
}

export default Auth;