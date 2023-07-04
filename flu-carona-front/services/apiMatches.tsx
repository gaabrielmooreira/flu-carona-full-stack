import axios from "axios";
import createConfig from "./createConfig";
import { Match } from "@/protocols/protocols";

async function findAll(token: string): Promise<Match[]> {
  const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/matches`, createConfig(token));
  return res;
}

const apiMatches = {
  findAll,
}

export { apiMatches };
