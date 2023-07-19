import { RideWithCompleteInfo } from "@/protocols/protocols";
import { useRouter } from "next/router";

export default function Ride({ ride }: { ride: RideWithCompleteInfo }) {
  const startAt = new Date(ride.startAt);
  const router = useRouter();

  return (
    <div key={ride.id} className="flex flex-col gap-10 w-full h-full bg-white rounded-3xl">

      <div className="w-1/2 self-center flex flex-col items-center text-center">
        <h3 className={`text-xl font-bold mb-2`}>Carona para a Partida:</h3>
        <p className={`text-base font-bold`}>{ride.Match.firstTeam} x {ride.Match.secondTeam} - {ride.Match.Stadium.name}</p>
        <p className={`text-base`}></p>
        <p className={`text-base`}>Horário: {new Date(ride.Match.time).toTimeString().substring(0, 5)}</p>
        <p className={`text-base`}>Data: {new Date(ride.Match.date).toLocaleDateString('pt-br')}</p>
      </div>

      <div className="flex flex-col gap-10 h-full">
        <div className="flex gap-12 items-center">
          <img className="rounded-md w-1/2 h-full object-cover" src={ride.Vehicle.image} />
          <div className="w-1/2 flex flex-col items-center text-center">
            <h3 className={`self-center text-xl font-bold mb-5`}>Detalhes da carona:</h3>
            <div className="flex flex-col gap-2 mb-5">
              <p className={`text-base`}>{ride.Vehicle.brand} - {ride.Vehicle.model}</p>
              <p className={`text-base max-w-[230px]`}>{ride.description}</p>
              <p className={`text-base`}>{ride.seats} vagas disponiveis</p>
              <p className={`text-base`}>Horário de Saída: {`${startAt.toTimeString().substring(0, 5)}`}</p>
              <p className={`text-base`}>Saíndo de: {ride.City.name} - {ride.City.State.uf}</p>
              <p className={`text-base`}>R$ {ride.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div className="w-1/2 flex justify-center items-center gap-5">
              <img className="w-[75px] h-[75px] rounded-full object-cover" src={ride.Vehicle.User.photo} />
              <p className={`text-base font-bold`}>{ride.Vehicle.User.name}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button onClick={() => { router.push(`/rides/${ride.id}/payment`) }} className={`w-1/2 max-w-[250px] h-8 bg-flu-red rounded-lg font-semibold text-white`}>Ir para o pagamento</button>
        </div>
      </div>
    </div>
  )
}