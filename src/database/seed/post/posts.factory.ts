import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Post } from "../../../Post/post.entity";
import { randomDateGenerator } from "../../../common/utils/date.utils"

export const PostsFactory = setSeederFactory(Post, (faker: Faker) => {
  const post = new Post();
  post.title = faker.lorem.sentence({min: 1, max: 5});
  post.text = faker.lorem.paragraphs({min: 1, max: 5});
  const createdAtStart = new Date('2020-12-17T00:00:00'),
    createdAtEnd =  new Date('2023-12-31T00:00:00');
  post.createdAt = randomDateGenerator(createdAtStart, createdAtEnd);
  post.updatedAt = randomDateGenerator(post.createdAt, createdAtEnd);
  return post;
});