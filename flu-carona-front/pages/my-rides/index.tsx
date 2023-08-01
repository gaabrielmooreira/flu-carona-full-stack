import Layout from "@/components/Layout/Layout";
import RideCard from "@/components/RideCard/RideCard";
import { useAuthContext } from "@/contexts/Auth";
import { RideWithCompleteInfo } from "@/protocols/protocols";
import { apiRides } from "@/services";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiAddthis } from "react-icons/si";

export default function MyRides() {
  const [rides, setRides] = useState<RideWithCompleteInfo[]>([]);
  const { userAuth } = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiRides.findAllMyRides(userAuth.token);
        setRides(data);
      } catch (error) {
        console.error('An error occured while trying to fetch the posts:', error);
      }
    }
    if (userAuth.token) fetchData();
  }, [userAuth.token]);

  return (
    <Layout>
      <h2 className="flex gap-5 text-4xl text-flu-red font-bold mb-10">
        Minhas Caronas Criadas<Link href='/my-rides/create-ride' className="flex"><SiAddthis color="#531b2f" /></Link>
      </h2>
      
      <div className="flex flex-wrap gap-10 mt-10">
        {rides.map((el) => <RideCard key={el.id} ride={el} />)}
      </div>
    </Layout>
  );
}