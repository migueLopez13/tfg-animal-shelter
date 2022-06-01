import entities from './src/shared/database/entities';

export default {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [...entities],
  synchronize: true,
  logging: false,
  seeds: ["src/shared/database/seeding/seeds/**/*{.ts,.js}"],
  factories: ["src/shared/database/seeding/factories/**/*{.ts,.js}"],
};