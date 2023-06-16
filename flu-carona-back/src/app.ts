import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { connectDb, disconnectDb, loadEnvs } from '@/configs';
import { routers } from '@/routers';
import { handleErrorsMiddleware } from '@/middlewares';

loadEnvs();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routers);
app.use(handleErrorsMiddleware);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
