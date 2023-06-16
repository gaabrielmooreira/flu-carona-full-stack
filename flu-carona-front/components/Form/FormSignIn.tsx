import { FormSignIn } from "@/protocols/protocols";
import { apiAuth } from "@/services";
import { useRouter } from "next/router"
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormSignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormSignIn>({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await apiAuth.signIn(formData);
      localStorage.setItem('user', JSON.stringify({ token }));
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={`flex flex-col items-center w-9/12`} onSubmit={handleSubmit}>
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

      <button className={`w-3/4 mb-4 bg-flu-green text-white h-12 rounded-xl px-4`} type="submit">Entrar</button>
    </form>
  )
}