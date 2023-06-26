export default function RideCard() {
  return (
    <div className="flex flex-col justify-between w-80 h-96 p-7 bg-flu-gray rounded-3xl text-white">
      <h2 className="text-white self-center text-xl font-bold">Fluminense x Flamengo</h2>
      <img className={`w-full h-40 rounded-xl`} src='https://cdn.autopapo.com.br/box/uploads/2022/02/22025520/renault-kwid-intense-2023-laranja-de-frente-732x488.jpg'></img>
      <div className="flex flex-col">
        <p className={`text-xs`}>Estádio: Maracanã</p>
        <p className={`text-xs`}>Local de Saída: Nova Iguaçu - Centro</p>
        <p className={`text-xs`}>Horário de Saída: 13:00</p>
        <p className={`text-xs`}>Vagas Disponíveis: 2</p>
        <button className={`w-full h-8 mt-3 self-center bg-flu-red rounded-lg font-semibold`}>Reservar Carona</button>
      </div>
    </div>
  )
}