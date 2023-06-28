import { FormSignUp, UserWithVehicles } from "@/protocols/protocols";
import axios from "axios";
import createConfig from "./createConfig";

async function signUp(body: FormSignUp) {
  await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/sign-up`, body);
}

async function findUserWithVehicles(token: string): Promise<UserWithVehicles> {
  const {data: res} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/vehicles`, createConfig(token));
  return res;
}

const apiUsers = {
  signUp,
  findUserWithVehicles,
}

export { apiUsers };