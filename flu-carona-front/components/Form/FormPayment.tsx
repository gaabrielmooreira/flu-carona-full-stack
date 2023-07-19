import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import { useAuthContext } from "@/contexts/Auth";
import { apiPayments } from "@/services/apiPayments";

export default function FormPayment() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    rideId: '',
    cardName: '',
    cardIssuer: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const { userAuth } = useAuthContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await apiPayments.create(formData, userAuth.token);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={`flex flex-col w-9/12`} onSubmit={handleSubmit}>
      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='cardNumber'>Numero do Cartão</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        type='text'
        name='cardNumber'
        id='cardNumber'
        value={formData.cardNumber}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='cardName'>Nome do Cartão:</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        type='text'
        name='cardName'
        id='cardName'
        value={formData.cardName}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='expirationDate'>Data de Validade:</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        type='text'
        name='expirationDate'
        id='expirationDate'
        value={formData.expirationDate}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor=''>cvv</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        type='text'
        name='cvv'
        id='cvv'
        value={formData.cvv}
        onChange={handleChange}
        required
      />

      <button className={`w-3/4 mb-4 bg-flu-red text-white h-12 rounded-xl px-4`} type="submit">Pagar</button>
    </form>
  )
}