import { FormSignUp } from "@/protocols/protocols";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/router';

export default function FormSignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormSignUp>({
    name: '',
    photo: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users/sign-up', formData);
      router.push('/sign-in');
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <form className={`flex flex-col items-center w-9/12`} onSubmit={handleSubmit}>
      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-name'>Nome Completo</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        placeholder="Sarah Doe"
        type='text'
        name='name'
        id='sign-up-name'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-photo'>Url da Foto</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        placeholder="http://www.photo.com/a.png"
        type='text'
        name='photo'
        id='sign-up-photo'
        value={formData.photo}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-email'>Email</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        placeholder="sarahdoe@email.com"
        type='email'
        name='email'
        id='sign-up-email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-senha'>Senha</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        placeholder="*******"
        type='password'
        name='password'
        id='sign-up-senha'
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-confirmar-senha'>Confirme a senha</label>
      <input
        className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`}
        placeholder="*******"
        type='password'
        name='confirmPassword'
        id='sign-up-confirmar-senha'
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button className={`w-3/4 mb-4 bg-flu-green text-white h-12 rounded-xl px-4`} type="submit">Registrar-se</button>
    </form>
  )
}