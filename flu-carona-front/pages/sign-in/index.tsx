import FormSignIn from "@/components/Form/FormSignIn";
import Link from 'next/link';

export default function SignIn() {
  return (
    <main>
      <div className="flex bg-flu-red">
        <div className={`flex flex-col justify-between items-center py-20 w-1/2 h-screen`}>
          <div>
            <h1 className={`text-flu-green text-5xl text-center font-bold `}>
              <span className={`text-white`}>Carona </span>FLU
            </h1>
            <p className={`text-white text-xl text-center font-bold `}>Vá de carona ao estádio e economize!</p>
          </div>

          <div>
            <img className={`max-w-lg`} src='https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-sublimado-fluminense-12252.png' />
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center rounded-bl-[100px] bg-white w-1/2 h-screen`}>
          <p className={`mb-10 text-4xl font-semibold`}>Login</p>
          <FormSignIn />
          <p className={`mt-10 text-xl text-flu-gray`}> Ainda não possui uma conta? <Link className={`text-flu-green`} href='/sign-up'>Clique Aqui</Link></p>
        </div>
      </div>
    </main>
  )
}