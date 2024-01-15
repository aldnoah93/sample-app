import { join } from "path";
import "reflect-metadata"
import { DataSource } from "typeorm"

if(process.env.POSTGRES_HOST === undefined) {
    require('dotenv').config({ path: '.env' });
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(`${process.env.POSTGRES_PORT || 5432}`),
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    synchronize: false,
    logging: process.env.POSTGRES_LOGGING === 'true',
    entities: ['{dist,src}/**/*.entity.{ts,js}'],
    migrations: ['{dist,src}/database/migrations/*.{ts,js}'],
    subscribers: [],
});