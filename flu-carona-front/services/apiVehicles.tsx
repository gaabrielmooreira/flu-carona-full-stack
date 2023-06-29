import axios from 'axios';
import createConfig from './createConfig';
import { CreateVehicle } from '@/protocols/protocols';

async function createVehicle(body: CreateVehicle, token: string) {
  const { data: res } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/create`, body, createConfig(token));
  return res;
}

const apiVehicles = {
  createVehicle,
}

export { apiVehicles };