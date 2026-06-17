import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const settingsRouter = Router();

// GET /settings - Retorna as configurações ou cria uma padrão se estiver vazio
settingsRouter.get('/', async (req, res) => {
  // Mude para minúsculo nas 3 funções do arquivo (.settings)
let settings = await prisma.settings.findUnique({ where: { id: 1 } });
  
  if (!settings) {
    // Mudado de prisma.settings para prisma.Settings
    settings = await prisma.settings.create({
      data: { id: 1, workTime: 25, shortBreakTime: 5, longBreakTime: 15 },
    });
  }
  
  return res.json(settings);
});

// PUT /settings - Atualiza as configurações
settingsRouter.put('/', async (req, res) => {
  const { workTime, shortBreakTime, longBreakTime } = req.body as {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };

  if (!Number.isInteger(workTime) || !Number.isInteger(shortBreakTime) || !Number.isInteger(longBreakTime)) {
    return res.status(400).json({ message: 'Valores inválidos' });
  }

  // Mudado de prisma.settings para prisma.Settings
  const settings = await prisma.settings.upsert({
    where: { id: 1 },
    update: { workTime, shortBreakTime, longBreakTime },
    create: { id: 1, workTime, shortBreakTime, longBreakTime },
  });

  return res.json(settings);
});