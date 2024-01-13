import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Post } from "../../Post/post.entity";

export default class MainSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const postsRepository = dataSource.getRepository(Post);
    const postsFactory = factoryManager.get(Post);

    const posts = await Promise.all(
        Array(parseInt(process.env.POST_SEEDS || '20'))
          .fill("")
          .map(async () => {
            const made = await postsFactory.make();
            return made;
          }),
      );
      await postsRepository.save(posts);
  }
}