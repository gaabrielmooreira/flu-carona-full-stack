import { PrismaClient } from '@prisma/client';
import { statesMock } from './mocks/statesMock';
import { stadiumsMock } from './mocks/stadiumsMock';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

async function main() {
  for (const adress of statesMock) {
    const exist = await prisma.state.findFirst({ where: { name: adress.nome } });
    if (!exist) {
      const state = await prisma.state.create({ data: { uf: adress.sigla, name: adress.nome } });

      for (const city of adress.cidades) {
        await prisma.city.create({
          data: {
            stateId: state.id,
            name: city
          }
        });
      }
    }
  }

  for (const stadium of stadiumsMock) {
    const exist = await prisma.stadium.findFirst({ where: { name: stadium.name } });
    const city = await prisma.city.findFirst({ where: { name: stadium.cityName } });
    if (!exist && city) await prisma.stadium.create({ data: { name: stadium.name, cityId: city.id } });
  }

  await prisma.match.createMany({
    data: [
      {
        firstTeam: 'Fluminense',
        secondTeam: 'Flamengo',
        time: new Date('2024-01-15T20:00:00.000Z'),
        date: new Date('2024-01-15T20:00:00.000Z'),
        stadiumId: 1,
      },
      {
        firstTeam: 'Fluminense',
        secondTeam: 'Botafogo',
        time: new Date('2023-08-10T16:00:00.000Z'),
        date: new Date('2023-08-10T16:00:00.000Z'),
        stadiumId: 2,
      },
      {
        firstTeam: 'Fluminense',
        secondTeam: 'Vasco',
        time: new Date('2023-10-20T18:00:00.000Z'),
        date: new Date('2023-10-20T18:00:00.000Z'),
        stadiumId: 3,
      },
    ]
  });

  await prisma.user.createMany({
    data: [
      {
        name: 'Alan',
        photo: 'https://segredosdomundo.r7.com/wp-content/uploads/2018/03/sair-bem-na-foto-3x4-e-possivel-15-dicas-para-a-foto-do-rg.jpg',
        email: 'alan@gmail.com',
        password: '11111111',
      },
      {
        name: 'Ricardo',
        photo: 'https://img.olhardigital.com.br/wp-content/uploads/2022/07/foto-34-shutterstock_1125126548.jpg',
        email: 'ricardo@gmail.com',
        password: '11111111',
      },
      {
        name: 'Renata',
        photo: 'https://www.42frases.com.br/wp-content/uploads/2016/11/frases-para-fotos-1-1.jpg',
        email: 'renata@gmail.com',
        password: '11111111',
      },
    ]
  });

  await prisma.vehicle.createMany({
    data: [
      {
        description: 'A',
        model: 'Celta',
        brand: 'Chevrolet',
        capacity: 4,
        image: 'https://img.olhardigital.com.br/wp-content/uploads/2023/05/Chevrolet-Celta-2000-3.jpg',
        userId: 1,
      },
      {
        description: 'B',
        model: 'EcoSport',
        brand: 'Ford',
        capacity: 4,
        image: 'https://autoentusiastas.com.br/ae/wp-content/uploads/2016/08/EcoSport-1.jpg',
        userId: 2,
      },
      {
        description: 'C',
        model: 'Onix',
        brand: 'Chevrolet',
        capacity: 4,
        image: 'https://cdn.motor1.com/images/mgl/0e477z/s3/chevrolet-onix-joy.jpg',
        userId: 3,
      },
    ]
  });

  await prisma.ride.createMany({
    data: [
      {
        description: 'Só Ida',
        price: 20,
        seats: 4,
        startAdressId: 3671,
        matchId: 1,
        startAt: dayjs().year(2023).month(11).day(21).hour(18).toDate(),
        vehicleId: 1,
      },
      {
        description: 'Só Ida',
        price: 25,
        seats: 4,
        startAdressId: 3675,
        matchId: 2,
        startAt: dayjs().year(2023).month(11).day(21).hour(13).toDate(),
        vehicleId: 2,
      },
      {
        description: 'Só Ida',
        price: 30,
        seats: 4,
        startAdressId: 3675,
        matchId: 3,
        startAt: dayjs().year(2023).month(11).day(21).hour(16).toDate(),
        vehicleId: 3,
      },
    ]
  });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })