import FormPayment from "@/components/Form/FormPayment";
import Layout from "@/components/Layout/Layout";

export default function Payment() {

  return (
    <Layout>
      <div className="w-full h-full">
        <h2 className="text-flu-red text-4xl font-bold mb-10">Pagamento da Carona</h2>
        <FormPayment />
      </div>
    </Layout>
  )
}