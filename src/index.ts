import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient(); // URL si bere automaticky z env DATABASE_URL

interface TodoBody {
  title: string;
}

// 1. Získání všech úkolů (GET)
fastify.get('/todos', async () => {
  return await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' }
  });
});

// 2. Vytvoření nového úkolu (POST)
fastify.post('/todos', async (request, reply) => {
  // Safe cast díky interface
  const { title } = request.body as TodoBody;

  if (!title) {
    return reply.status(400).send({ error: 'Title is required' });
  }

  const newTodo = await prisma.todo.create({
    data: { title }
  });

  return newTodo;
});

const start = async () => {
  try {
    // Fastify v3/4 vyžaduje objekt v listen
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log("API běží na portu 3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
