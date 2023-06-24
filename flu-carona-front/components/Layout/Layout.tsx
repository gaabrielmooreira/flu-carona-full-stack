import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <nav className={`fixed flex flex-col justify-between items-center bg-flu-red w-[300px] h-full px-4 py-10`}>
        <h1 className={`text-flu-green text-4xl text-center font-bold `}>
          <span className={`text-white`}>Carona </span>FLU
        </h1>
        <ul className={`flex flex-col items-center text-white text-lg font-semibold`}>
          <li>Meu Perfil</li>
          <li>Reservar Carona</li>
          <li>Minhas Caronas</li>
          <li>Histórico de Caronas</li>
          <li>Sair</li>
        </ul>
        <div>
          <img className={`w-full rounded-full`} src='https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-sublimado-fluminense-12252.png' />
        </div>
      </nav>
      <main className={`ml-[300px] w-full px-10 py-8`}>
        {children}
      </main>
    </div>
  )
}