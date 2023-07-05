import axios from "axios";
import { City, State } from "@/protocols/protocols";

async function findAll(): Promise<State[]> {
  const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/states`);
  return res;
}

async function findCitiesByStateId(id: number): Promise<City[]> {
  const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/states/${id}/cities`);
  return res;
}

const apiStates = {
  findAll,
  findCitiesByStateId,
}

export { apiStates };
