import Layout from "@/components/Layout/Layout";
import VehicleCard from '@/components/VehicleCard/VehicleCard';
import { useAuthContext } from "@/contexts/Auth";
import { UserWithVehicles } from "@/protocols/protocols";
import { apiUsers } from "@/services";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiAddthis } from 'react-icons/si';

export default function Profile() {
  const [userProfile, setUserProfile] = useState<UserWithVehicles>({
    id: 0,
    name: '',
    photo: '',
    email: '',
    Vehicles: [],
  });
  const { userAuth } = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiUsers.findUserWithVehicles(userAuth.token);
        console.log(data);
        setUserProfile(data);
      } catch (error) {
        console.log('An error occured while trying to fetch the posts:', error);
      }
    }
    if (userAuth.token) fetchData();
  }, [userAuth.token]);

  if (!userProfile) return (
    <div>Loading...</div>
  )

  return (
    <Layout>
      <h2 className="text-flu-red text-4xl font-bold">Meu Perfil</h2>

      <div className="flex flex-wrap items-center gap-10 mt-10">
        <img
          className="w-[250px] h-[250px] rounded-full object-cover"
          src={userProfile.photo}
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">Name</h3>
          <p className="text-lg">{userProfile.name}</p>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-lg">{userProfile.email}</p>
        </div>
      </div>

      <h2 className="flex gap-5 text-4xl text-flu-red font-bold my-10">Meus veículos<Link href='/profile/add-vehicle' className="flex"><SiAddthis color="#531b2f" /></Link></h2>

      <div className="flex gap-6 flex-wrap">
        {
          userProfile?.Vehicles.length === 0
            ? <p className="w-full mt-5">Você ainda não tem veículos cadastrados.</p>
            : userProfile.Vehicles.map((vehicle) => <VehicleCard vehicle={vehicle} />)
        }
      </div>
    </Layout>
  )
}

