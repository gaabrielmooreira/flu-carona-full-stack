import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { SiAddthis } from "react-icons/si";

export default function MyRides() {
  return (
    <Layout>
      <h2 className="flex gap-5 text-4xl text-flu-red font-bold mb-10">
        Minhas Corridas<Link href='/my-rides/create-ride' className="flex"><SiAddthis color="#531b2f" /></Link>
      </h2>
      
    </Layout>
  );
}