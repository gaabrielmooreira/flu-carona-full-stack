import axios from "axios";
import createConfig from "./createConfig";
import { CreateRide, RideWithCompleteInfo } from "@/protocols/protocols";

async function findAll(token: string): Promise<RideWithCompleteInfo[]> {
  const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rides`, createConfig(token));
  return res;
}

async function createRide(body: CreateRide, token: string): Promise<void> {
  await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rides/create`, body, createConfig(token));
}

const apiRides = {
  findAll,
  createRide,
}

export { apiRides };
