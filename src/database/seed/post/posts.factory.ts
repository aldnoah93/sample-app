import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Post } from "../../../Post/post.entity";

export const PostsFactory = setSeederFactory(Post, (faker: Faker) => {
  const post = new Post();
  post.title = faker.lorem.sentence({min: 1, max: 5});
  post.text = faker.lorem.paragraphs({min: 1, max: 5});
  return post;
});