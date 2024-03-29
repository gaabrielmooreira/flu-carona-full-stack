import { Booking, Match, Payment, Ride, User, Vehicle, Stadium, City, State } from '@prisma/client';
import { Request } from 'express';

export type ApplicationError = {
  name: string;
  message: string;
};

export type CreateUserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export type SignInData = Pick<User, 'email' | 'password'>;

export type CreateVehicleData = Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt' | 'userId'>;

export type CreateRideData = Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>;

export type CreateBookingData = {
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: number;
} & Pick<Booking, 'rideId'> & Pick<Payment, 'cardIssuer'>;

export type AuthenticatedRequest = Request & JWTPayload;

export type JWTPayload = {
  userId: number;
};

export type RideResponseWithAllInfo = Ride & {
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