import axios from "axios";
import createConfig from "./createConfig";
import { UserBookedRides } from "@/protocols/protocols";

async function findAllBookedRidesByUser(token: string): Promise<UserBookedRides[]> {
  const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/booking/rides`, createConfig(token));
  return res;
}

const apiBookings = {
  findAllBookedRidesByUser,
}

export { apiBookings };
