import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import { useAuthContext } from "@/contexts/Auth";
import { apiPayments } from "@/services/apiPayments";
import Cards, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function FormPayment() {
  const router = useRouter();
  
  const [formData, setFormData] = useState<{
    focus: Focused,
    rideId: string,
    name: string,
    cardIssuer: string,
    number: string,
    expiry: string,
    cvc: string,
  }>({
    focus: 'number',
    name: '',
    number: '',
    expiry: '',
    cvc: '',
    cardIssuer: '',
    rideId: router.query.id?.toString() || '',
  });

  const { userAuth } = useAuthContext();

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    const name = e.target.name as Focused;

    setFormData({ ...formData, focus: name });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleChangeExpiry = (e: ChangeEvent<HTMLInputElement>) => {
    if (formData.expiry.length === 1 && !(formData.expiry.includes('/'))) {
      setFormData({ ...formData, [e.target.name]: `${e.target.value}/` })
    } else {
      handleChange(e);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const paymentInput = {
        rideId: Number(formData.rideId),
        cardName: formData.name,
        cardIssuer: "VISA",
        cardNumber: formData.number,
        expirationDate: formData.expiry,
        cvv: formData.cvc,
      };
      await apiPayments.create(paymentInput, userAuth.token);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={`flex flex-col gap-6`} onSubmit={handleSubmit}>
      <div className="flex flex-col max-w-[600px] gap-8 lg:flex-row">
        <div className="max-w-[290px]">
          <Cards
            cvc={formData.cvc}
            expiry={formData.expiry}
            focused={formData.focus}
            name={formData.name}
            number={formData.number}
            acceptedCards={['visa', 'mastercard']}
          />
        </div>

        <div className="flex flex-col justify-between h-[182px] max-w-[290px]">
          <input
            className={`w-full border border-flu-red h-12 rounded-xl px-4`}
            placeholder="Card Number"
            type='tel'
            inputMode="numeric"
            minLength={16}
            maxLength={16}
            name='number'
            pattern="[0-9]*"
            value={formData.number}
            onChange={handleChange}
            onFocus={handleInputFocus}
            required
          />

          <input
            className={`w-full border border-flu-red h-12 rounded-xl px-4`}
            placeholder="Card Name"
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            onFocus={handleInputFocus}
            required
          />
          <div className="flex gap-2">
            <input
              className={`w-3/4 border border-flu-red h-12 rounded-xl px-4`}
              placeholder="Valid Thru"
              type='text'
              name='expiry'
              maxLength={5}
              pattern="[0-9]{2}/[0-9]{2}"
              value={formData.expiry}
              onChange={handleChangeExpiry}
              onFocus={handleInputFocus}
              required
            />

            <input
              className={`w-1/4 border border-flu-red h-12 rounded-xl px-4`}
              placeholder="CVV"
              type='tel'
              name='cvc'
              maxLength={3}
              pattern="\d*"
              value={formData.cvc}
              onChange={handleChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
        </div>
      </div>

      <button className={`max-w-[290px] w-full bg-flu-red text-white h-12 rounded-xl px-4 lg:max-w-[600px]`} type="submit">Pagar</button>
    </form>
  )
}