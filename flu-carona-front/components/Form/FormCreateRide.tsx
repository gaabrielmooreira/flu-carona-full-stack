import { useAuthContext } from "@/contexts/Auth";
import { City, CreateRide, FormCreateRide, Match, State, Vehicle } from "@/protocols/protocols";
import { apiMatches, apiRides, apiUsers } from "@/services";
import { apiStates } from "@/services/apiStates";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function FormCreateRide() {
  const router = useRouter();
  const { userAuth } = useAuthContext();

  const [formData, setFormData] = useState<FormCreateRide>({
    description: '',
    price: '',
    seats: 1,
    startAdressId: 0,
    matchId: 0,
    date: '',
    time: '',
    returnAt: '',
    vehicleId: 0,
  });

  const [userVehicles, setUserVehicles] = useState<Vehicle[] | undefined>(undefined);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>(undefined);

  const [matches, setMatches] = useState<Match[] | undefined>(undefined);

  const [states, setStates] = useState<State[] | undefined>(undefined);
  const [cities, setCities] = useState<City[] | undefined>(undefined);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const data = await apiUsers.findUserWithVehicles(userAuth.token);
        setUserVehicles(data.Vehicles);
      } catch (error) {
        console.log('An error occured while trying to fetch the vehicles:', error);
      }
    }

    async function fetchMatches() {
      try {
        const data = await apiMatches.findAll(userAuth.token);
        setMatches(data);
      } catch (error) {
        console.log('An error occured while trying to fetch the matches:', error);
      }
    }

    async function fetchStates() {
      try {
        const data = await apiStates.findAll();
        setStates(data);
      } catch (error) {
        console.log('An error occured while trying to fetch the matches:', error);
      }
    }

    if (userAuth.token) {
      fetchVehicles();
      fetchMatches();
      fetchStates();
    };
  }, [userAuth.token]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`${e.target.name}: ${e.target.value}`)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body: CreateRide = {
        description: formData.description ? formData.description:'',
        price: formData.price ? Number(formData.price): 0,
        seats: formData.seats ? formData.seats: 1,
        startAdressId: formData.startAdressId,
        matchId: formData.matchId,
        startAt: (new Date(`${formData.date}T${formData.time}`)),
        vehicleId: formData.vehicleId,
      }
      console.log(body);
      await apiRides.createRide(body, userAuth.token);
      router.push('/my-rides');
    } catch (err) {
      console.log(err);
    }
  }

  const handleNumberPicker = (operator: string) => {
      if (operator === '+' && formData.seats < (selectedVehicle ? selectedVehicle.capacity : 1)) setFormData({ ...formData, seats: Number(formData.seats) + 1 });
      if (operator === '-' && formData.seats > 1) setFormData({ ...formData, seats: Number(formData.seats) - 1 });
  }

  const handleSelectVehicle = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, vehicleId: Number(e.target.value) });
    const findVehicle = userVehicles?.find((v) => v.id === Number(e.target.value));
    setSelectedVehicle(findVehicle);
  }

  const handleSelectMatch = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, matchId: Number(e.target.value) });
  }

  const handleSelectState = async (e: ChangeEvent<HTMLSelectElement>) => {
    if (Number(e.target.value) === 0) return setCities(undefined);
    const data = await apiStates.findCitiesByStateId(Number(e.target.value));
    setCities(data);
  }

  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, startAdressId: Number(e.target.value) });
  }

  if (userVehicles?.length === 0) return <p className="mb-4">É necessário ter um veículo antes de criar uma corrida.</p>;
  if (matches?.length === 0) return <p className="mb-4">Não há partidas disponíveis para criar uma corrida.</p>;

  return (
    <form className={`flex flex-col items-center w-5/12`} onSubmit={handleFormSubmit}>
      <label className={`w-full mb-2.5 text-flu-gray`}>Selecione seu carro:</label>

      <select className={`w-[200px] mb-4`} onChange={(e) => handleSelectVehicle(e)}>
        <option value={0}>Selecione</option>
        {userVehicles?.map((el) => <option key={el.id} value={el.id}>{el.brand} {el.model}</option>)}
      </select>

      <label className={`w-full mb-2.5 text-flu-gray`}>Assentos disponíveis:</label>
      <div className="flex self-start w-full mb-4">
        <button
          type="button"
          className="w-8 h-10 border-2 border-solid border-flu-red"
          onClick={() => handleNumberPicker('-')}
        >
          -
        </button>
        <input
          className={`w-10 h-10 text-center border-t-2 border-b-2 border-solid border-flu-red px-2 focus:outline-none `}
          type='number'
          name='seats'
          value={formData.seats}
          required
          disabled
          min="1"
          max={selectedVehicle ? selectedVehicle.capacity : 10}
        />
        <button
          type="button"
          className="w-8 h-10 border-2 border-solid border-flu-red"
          onClick={() => handleNumberPicker('+')}>
          +
        </button>
      </div>

      <label className={`w-full mb-2.5 text-flu-gray`}>Selecione a Partida:</label>
      <select className={`w-[200px] mb-4`} onChange={(e) => handleSelectMatch(e)}>
        <option value={0}>Selecione</option>
        {
          matches?.map((el) =>
            <option key={el.id} value={el.id}>
              {el.firstTeam} x {el.secondTeam} - {el.date.toString().slice(8, 10)}/{el.date.toString().slice(5, 7)}/{el.date.toString().slice(0, 4)}
            </option>)
        }
      </select>

      <label className={`w-full mb-2.5 text-flu-gray`}>Selecione o Estado:</label>
      <select className={`w-[200px] mb-4`} onChange={(e) => handleSelectState(e)}>
        <option value={0}>Selecione</option>
        {
          states?.map((el) =>
            <option key={el.id} value={el.id}>
              {el.name} - {el.uf}
            </option>)
        }
      </select>

      <label className={`w-full mb-2.5 text-flu-gray`}>Selecione a Cidade:</label>
      <select className={`w-[200px] mb-4`} onChange={(e) => handleSelectCity(e)}>
        <option value={0}>Selecione</option>
        {
          cities?.map((el) =>
            <option key={el.id} value={el.id}>
              {el.name}
            </option>)
        }
      </select>

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='ride-price'>Valor por pessoa</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="Valor em R$"
        type='number'
        name='price'
        id='ride-price'
        value={formData.price}
        onChange={handleInputChange}
        required
      />

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='ride-date'>Data da carona</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="12/12/2023"
        type='date'
        name='date'
        id='ride-date'
        value={formData.date}
        onChange={handleInputChange}
        required
      />

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='ride-time'>Horário de Saída</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="10:00"
        type='time'
        name='time'
        id='ride-time'
        value={formData.time}
        onChange={handleInputChange}
        required
      />

      <label className={`w-full mb-2.5 text-flu-gray`} htmlFor='ride-description'>Descrição</label>
      <input
        className={`w-full mb-4 border border-flu-red h-12 rounded-xl px-4 focus:outline-none`}
        placeholder="Corrida saindo de Ipanema para o Maracanã às 10:30 da manhã"
        type='text'
        name='description'
        id='ride-description'
        value={formData.description}
        onChange={handleInputChange}
        required
      />

      <button className={`w-full mb-4 bg-flu-red text-white h-12 rounded-xl px-4`} type="submit">Criar Corrida</button>
    </form>
  )
}