
export default function FormSignIn() {
  return (
    <form className={`flex flex-col items-center w-9/12`}>
      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-email'>Email</label>
      <input className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`} placeholder="sarahdoe@email.com" type='email' id='sign-up-email' />

      <label className={`w-3/4 mb-2.5 text-flu-gray`} htmlFor='sign-up-senha'>Senha</label>
      <input className={`w-3/4 mb-4 border border-flu-red h-12 rounded-xl px-4`} placeholder="*******" type='password' id='sign-up-senha' />

      <button className={`w-3/4 mb-4 bg-flu-green text-white h-12 rounded-xl px-4`} type="submit">Entrar</button>
    </form>
  )
}