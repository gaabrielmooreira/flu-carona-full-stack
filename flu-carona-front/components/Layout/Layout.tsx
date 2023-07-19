import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <nav className={`fixed flex flex-col justify-between items-center bg-flu-red w-[300px] h-full px-4 py-10`}>
        <h1 className={`text-white text-4xl text-center font-bold `}>
         <Link href='/'>Carona <span className={`text-flu-green`}>FLU</span></Link>
        </h1>
        <ul className={`flex flex-col items-center gap-2 text-white text-lg font-semibold`}>
          <Link href='/profile'><li>Meu Perfil</li></Link>
          <Link href='/'><li>Reserve sua Carona</li></Link>
          <Link href='/my-rides'><li>Ofereça sua Carona</li></Link>
          <Link href='/history'><li>Histórico de Caronas</li></Link>
          <Link href='/sign-in'><li>Sair</li></Link>
        </ul>
        <div>
          <img className={`w-full rounded-full`} src='https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-sublimado-fluminense-12252.png' />
        </div>
      </nav>
      <main className={`ml-[300px] w-full min-h-screen px-10 pt-8`}>
        {children}
      </main>
    </div>
  )
}