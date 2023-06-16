import { FormSignIn } from "@/protocols/protocols";
import axios from "axios";

async function signIn(body: FormSignIn) {
  const { data: res } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-in`, body);
  return res;
}

const apiAuth = {
  signIn,
}

export { apiAuth };