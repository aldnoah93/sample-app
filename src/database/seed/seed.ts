import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { PostsFactory } from "./post/posts.factory";
import MainSeeder from "./main.seeder";


const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(`${process.env.POSTGRES_PORT || 5432}`),
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    entities: ['{dist,src}/**/*.entity.{ts,js}'],
    migrations: ['{dist,src}/database/migrations/*.{ts,js}'],
    // additional seed config 
    factories: [PostsFactory],
    seeds: [MainSeeder],
    };

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await runSeeders(dataSource);
  process.exit();
});