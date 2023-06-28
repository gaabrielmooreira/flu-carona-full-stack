import Layout from "@/components/Layout/Layout";
import RideCard from "@/components/RideCard/RideCard";
import { useAuthContext } from "@/contexts/Auth";
import { RideWithCompleteInfo } from "@/protocols/protocols";
import { apiRides } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [rides, setRides] = useState<RideWithCompleteInfo[]>([]);
  const { userAuth } = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiRides.findAll(userAuth.token);
        setRides(data);
      } catch (error) {
        console.error('An error occured while trying to fetch the posts:', error);
      }
    }
    if (userAuth.token) fetchData();
  }, [userAuth.token]);

  return (
    <Layout>
      <h2 className="text-4xl text-flu-red font-bold">Reserve sua carona</h2>

      <div className="flex flex-wrap gap-10 mt-10">
        {rides.map((el) => <RideCard key={el.id} ride={el} />)}
      </div>
    </Layout>
  )
}
