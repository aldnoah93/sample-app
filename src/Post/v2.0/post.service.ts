import Logger from "../../common/logging/logger";
import { AppDataSource } from "../../database/data-source";
import { Post } from "../post.entity";
import { PostCreateDto, PostCreatedDto, PostDto } from "./dtos";

export class PostService {
    static readonly posts = AppDataSource.getRepository(Post);

    static async create(post: PostCreateDto): Promise<PostCreatedDto> {
        const createdDate = await this.posts.save(post);
        return createdDate;
    }

    static async list(): Promise<PostDto[]> {
        const posts:PostDto[] = await this.posts.find();
        return posts;
    }

    static async listById(id:number): Promise<PostDto> {
        const post = await this.posts.findOneByOrFail({id: id});
        Logger.debug(post);
        return post;
    }

    static async update(post: Post): Promise<boolean> {
        const updatedPost = await this.posts.update({id: post.id}, {title: post.title, text: post.text});
        Logger.debug(updatedPost);
        return updatedPost.affected == 1;
    }

    static async delete(id:number): Promise<boolean> {
        const deleted = await this.posts.delete({id: id});
        return deleted.affected == 1;
    }


}