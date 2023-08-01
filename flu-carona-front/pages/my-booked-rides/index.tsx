import Layout from "@/components/Layout/Layout";
import RideCard from "@/components/RideCard/RideCard";
import { useAuthContext } from "@/contexts/Auth";
import { UserBookedRides } from "@/protocols/protocols";
import { apiBookings } from "@/services/apiBookings";
import { useEffect, useState } from "react";

export default function MyBookedRides() {
  const [bookedRides, setBookedRides] = useState<UserBookedRides[]>([]);
  const { userAuth } = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiBookings.findAllBookedRidesByUser(userAuth.token);
        setBookedRides(data);
      } catch (error) {
        console.error('An error occured while trying to fetch the posts:', error);
      }
    }
    if (userAuth.token) fetchData();
  }, [userAuth.token]);

  return (
    <Layout>
      <h2 className="text-4xl text-flu-red font-bold mb-10">
        Caronas Reservadas
      </h2>
      
      <div className="flex flex-wrap gap-10 mt-10">
        {bookedRides.map((el) => <RideCard key={el.rideId} ride={el.Ride} />)}
      </div>
    </Layout>
  );
}