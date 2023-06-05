import express, { Express } from 'express';
import cors from 'cors';
import { connectDb, disconnectDb, loadEnvs } from '@/configs';
import { routers } from '@/routers';

loadEnvs();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routers);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
