import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const tasksRouter = Router();

// GET /tasks
tasksRouter.get('/', async (req, res) => {
  const tasks = await prisma.task.findMany({
    orderBy: { startDate: 'desc' },
  });
  return res.json(tasks);
});

// POST /tasks
tasksRouter.post('/', async (req, res) => {
  const { id, name, duration, type, startDate } = req.body;

  if (!id || !name || !duration || !type || !startDate) {
    return res.status(400).json({ message: 'Campos obrigatórios faltando.' });
  }

  const task = await prisma.task.create({
    data: { id: String(id), name, duration, type, startDate },
  });

  return res.status(201).json(task);
});

// PATCH /tasks/:id/complete
tasksRouter.patch('/:id/complete', async (req, res) => {
  const { id } = req.params;
  const { completeDate } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id },
      data: { completeDate },
    });
    return res.json(task);
  } catch {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }
});

// PATCH /tasks/:id/interrupt
tasksRouter.patch('/:id/interrupt', async (req, res) => {
  const { id } = req.params;
  const { interruptDate } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id },
      data: { interruptDate },
    });
    return res.json(task);
  } catch {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }
});

// DELETE /tasks - limpar tudo
tasksRouter.delete('/', async (req, res) => {
  await prisma.task.deleteMany();
  return res.status(204).send();
});