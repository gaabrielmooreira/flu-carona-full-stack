import axios from "axios";
import createConfig from "./createConfig";

async function create(body: any, token: string): Promise<any> {
  const { data: res } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/booking`, body, createConfig(token));
  return res;
}

const apiPayments = {
  create,
}

export { apiPayments };
