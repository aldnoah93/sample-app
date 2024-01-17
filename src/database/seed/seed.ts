import "reflect-metadata";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { PostsFactory } from "./post/posts.factory";
import MainSeeder from "./main.seeder";
import { AppDataSource } from "./../data-source";


const options: SeederOptions = {
  factories: [PostsFactory],
  seeds: [MainSeeder],
};

AppDataSource.initialize().then(async (dataSource) => {
  await dataSource.dropDatabase();
  await dataSource.runMigrations();
  await runSeeders(dataSource, options);
  process.exit();
});