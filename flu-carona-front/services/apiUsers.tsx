import { FormSignUp } from "@/protocols/protocols";
import axios from "axios";

async function signUp(body: FormSignUp) {
  await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/sign-up`, body);
}

const apiUsers = {
  signUp,
}

export { apiUsers };