import axios from "axios";
import createConfig from "./createConfig";
import { RideWithCompleteInfo } from "@/protocols/protocols";

async function findAll(token: string): Promise<RideWithCompleteInfo[]> {
  const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rides`, createConfig(token));
  return res;
}

const apiRides = {
  findAll,
}

export { apiRides };
