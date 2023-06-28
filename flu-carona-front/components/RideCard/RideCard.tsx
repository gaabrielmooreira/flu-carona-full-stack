import { RideWithCompleteInfo } from "@/protocols/protocols";

export default function RideCard({ ride }: { ride: RideWithCompleteInfo }) {
  const startAt = new Date(ride.startAt);

  return (
    <div key={ride.id} className="flex flex-col justify-between w-96 h-60 p-7 bg-white rounded-3xl shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-black">
      <div>
        <h2 className="flex justify-between self-center text-xl font-bold"><span>{ride.Match.firstTeam} x {ride.Match.secondTeam}</span><span className="text-flu-red">R$ {ride.price}</span></h2>
        <h2 className="self-center text-xl font-bold">Estádio {ride.Match.Stadium.name}</h2>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className={`text-xs`}>Vagas: {ride.seats}</p>
          <p className={`text-xs`}>Horário: {`${startAt.getUTCHours()}:${startAt.getUTCMinutes()}`}</p>
          <p className={`text-xs`}>Saíndo de: {ride.City.name} - {ride.City.State.uf}</p>
        </div>

        <div className="flex items-center">
          <div className="flex items-center gap-2 w-1/2">
            <img className="w-[50px] h-[50px] rounded-full object-cover" src={ride.Vehicle.User.photo} />
            <p className={`text-xs`}>{ride.Vehicle.User.name}</p>
          </div>

          <button className={`w-1/2 h-8 self-end bg-flu-red rounded-lg font-semibold text-white`}>Reservar</button>
        </div>
      </div>
    </div>
  )
}