import FormAddVehicle from "@/components/Form/FormAddVehicle";
import Layout from "@/components/Layout/Layout";

export default function AddVehicle() {

  return (
    <Layout>
      <h2 className="text-flu-red text-4xl font-bold mb-10">Adicionar Veículo</h2>
      <FormAddVehicle />
    </Layout>
  )
}