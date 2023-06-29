import { useAuthContext } from "@/contexts/Auth";
import { CreateVehicle } from "@/protocols/protocols";
import { apiVehicles } from "@/services";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormAddVehicle() {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateVehicle>({
    description: '',
    brand: '',
    model: '',
    capacity: 1,
    image: '',
  });
  const { userAuth } = useAuthContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleNumberPicker = (operator: string) => {
    if (operator === '+' && formData.capacity < 8) setFormData({ ...formData, capacity: Number(formData.capacity) + 1 });
    if (operator === '-' && formData.capacity > 1) setFormData({ ...formData, capacity: Number(formData.capacity) - 1 });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await apiVehicles.createVehicle(formData, userAuth.token);
      router.push('/profile');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={`flex flex-col items-center w-5/12`} onSubmit={handleSubmit}>
      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='vehicle-description'>Description</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="Carro com 2 portas, possui ar-condicionado..."
        type='text'
        name='description'
        id='vehicle-description'
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='vehicle-brand'>Brand</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="Chevrolet, Ford, Hyundai..."
        type='text'
        name='brand'
        id='vehicle-brand'
        value={formData.brand}
        onChange={handleChange}
        required
      />

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='vehicle-model'>Model</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="Celta, Onix, HB-20..."
        type='text'
        name='model'
        id='vehicle-model'
        value={formData.model}
        onChange={handleChange}
        required
      />

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='vehicle-capacity'>Capacity</label>
      <div className="flex self-start w-full mb-4">
        <button
          type="button"
          className="w-8 h-10 border-2 border-solid border-flu-red"
          onClick={() => handleNumberPicker('-')}
        >
          -
        </button>
        <input
          className={`w-10 h-10 text-center border-t-2 border-b-2 border-solid border-flu-red px-2 focus:outline-none `}
          placeholder="3"
          type='number'
          name='capacity'
          id='vehicle-capacity'
          value={formData.capacity}
          required
          disabled
          min="1"
          max="8"
        />
        <button
          type="button"
          className="w-8 h-10 border-2 border-solid border-flu-red"
          onClick={() => handleNumberPicker('+')}>
          +
        </button>
      </div>

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='vehicle-image'>Foto do Veículo</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="http://www.image.com/img.png"
        type='text'
        name='image'
        id='vehicle-image'
        value={formData.image}
        onChange={handleChange}
        required
      />

      <button className={`w-full mb-4 bg-flu-red text-white h-12 rounded-xl px-4`} type="submit">Cadastrar Veículo</button>
    </form>
  )
}