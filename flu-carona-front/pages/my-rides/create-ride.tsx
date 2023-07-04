import FormCreateRide from "@/components/Form/FormCreateRide";
import Layout from "@/components/Layout/Layout";

export default function CreateRide() {
  return (
    <Layout>
      <h2 className="text-flu-red text-4xl font-bold mb-10">Criar Corrida</h2>
      <FormCreateRide />
    </Layout>
  );
}