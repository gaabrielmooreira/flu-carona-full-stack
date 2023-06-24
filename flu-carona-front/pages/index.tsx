import Layout from "@/components/Layout/Layout";
import RideCard from "@/components/RideCard/RideCard";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-wrap gap-10">
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
      </div>
    </Layout>
  )
}
