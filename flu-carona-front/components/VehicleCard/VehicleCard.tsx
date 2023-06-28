import { Vehicle } from "@/protocols/protocols";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="w-[300px] h-[360px] rounded-3xl shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] shadow-black">
      <img
        className="w-full h-[200px] rounded-t-3xl object-cover"
        src={vehicle.image}
        alt={vehicle.model}
      />
      <div className="flex flex-col py-2 px-5 gap-2">
        <p className="text-center text-lg font-semibold">{vehicle.brand.toUpperCase()} {vehicle.model.toUpperCase()}</p>
        <p className="text-sm">{vehicle.description}</p>
        <p className="text-sm">Suporta {vehicle.capacity} passageiros</p>
        <p className="self-end text-xs">Adicionado em {new Date(vehicle.createdAt).getDay()}/{new Date(vehicle.createdAt).getMonth()}/{new Date(vehicle.createdAt).getFullYear()}</p>
      </div>
    </div>
  )
}