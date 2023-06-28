import axios from 'axios';
import createConfig from './createConfig';

async function createVehicle(body: any, token: string) {
  const { data: res } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/create`, body, createConfig(token));
  return res;
}

const apiVehicles = {
  createVehicle,
}

export { apiVehicles };