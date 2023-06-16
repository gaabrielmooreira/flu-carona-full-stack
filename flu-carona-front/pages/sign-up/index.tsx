import FormSignUp from "@/components/Form/FormSignUp";
import Link from 'next/link';

export default function SignUp() {
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
          <p className={`mb-10 text-4xl font-semibold`}>Criar Conta</p>
          <FormSignUp />
          <p className={`mt-10 text-xl text-flu-gray`}> Já possui uma conta? <Link href='/sign-in' className={`text-flu-green`}>Entre Aqui</Link></p>
        </div>
      </div>
    </main>
  )
}
