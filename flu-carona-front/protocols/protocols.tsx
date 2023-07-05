export interface FormSignUp {
  name: string;
  photo: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormSignIn {
  email: string;
  password: string;
}

export type Ride = {
  id: number
  description: string | null
  price: number
  seats: number
  startAdressId: number
  matchId: number
  startAt: Date
  returnAt: Date | null
  vehicleId: number
  isFinish: boolean
  createdAt: Date | null
  updatedAt: Date | null
}

export type Match = {
  id: number
  firstTeam: string
  secondTeam: string
  time: Date
  date: Date
  stadiumId: number
  createdAt: Date | null
  updatedAt: Date | null
}

export type City = {
  id: number
  name: string
  stateId: number
}

export type Vehicle = {
  id: number
  description: string
  model: string
  brand: string
  capacity: number
  image: string
  userId: number
  createdAt: Date
  updatedAt: Date
}

export type CreateVehicle = {
  description: string
  model: string
  brand: string
  capacity: number
  image: string
}

export type RideWithCompleteInfo = Ride & {
  Match: Match & {
    Stadium: {
      id: number,
      name: string,
    }
  },
  City: City & {
    State: {
      id: number,
      uf: string,
      name: string,
    }
  },
  Vehicle: Vehicle & {
    User: {
      id: number,
      name: string,
      photo: string,
    }
  },
}

export type UserWithVehicles = {
  id: number,
  name: string,
  photo: string,
  email: string,
  Vehicles: Vehicle[],
}

export type FormCreateRide = {
  description: string;
  price: string;
  seats: number;
  startAdressId: number;
  matchId: number;
  date: string;
  time: string;
  returnAt: string;
  vehicleId: number;
}

export type CreateRide = {
  description: string;
  price: number;
  seats: number;
  startAdressId: number;
  matchId: number;
  startAt: Date;
  returnAt?: Date;
  vehicleId: number;
}

export type State = {
  id: number,
  uf: string,
  name: string,
}
