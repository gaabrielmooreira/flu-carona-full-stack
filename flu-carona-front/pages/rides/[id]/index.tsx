import Layout from "@/components/Layout/Layout";
import Ride from "@/components/Ride/Ride";
import { useAuthContext } from "@/contexts/Auth";
import { RideWithCompleteInfo } from "@/protocols/protocols";
import { apiRides } from "@/services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RideInfoPage() {
  const router = useRouter();
  const { userAuth } = useAuthContext();
  const [ride, setRide] = useState<RideWithCompleteInfo>();
  const rideId = router.query.id as string;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiRides.findById(Number(rideId), userAuth.token);
        console.log(data);
        setRide(data);
      } catch (error) {
        console.error('An error occured while trying to fetch the posts:', error);
      }
    }
    if (userAuth.token) fetchData();
  }, [rideId, userAuth.token])

  return (
    <Layout>
      <div className="w-full h-full">
        <h2 className="text-flu-red text-4xl font-bold mb-10">Resumo da Corrida</h2>
        <div className="w-5/6 max-w-[1000px] h-[600px]">
          {ride ? <Ride ride={ride} /> : "Ride does not exists."}
        </div>
      </div>
    </Layout>
  )
}