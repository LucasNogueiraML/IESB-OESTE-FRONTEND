import express from 'express';
import cors from 'cors';
import { settingsRouter } from './routes/settings.route.js'; // Lembrar do .js
import { tasksRouter } from './routes/tasks.route.js';       // Descomentado e com .js

export const app = express();

app.use(cors());
app.use(express.json());

// Ativando as rotas na API
app.use('/settings', settingsRouter);
app.use('/tasks', tasksRouter); 

// Rota de teste
app.get('/health', (req, res) => {
  res.json({ ok: true });
});