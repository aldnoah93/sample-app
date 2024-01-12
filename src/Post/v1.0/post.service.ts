import Logger from "../../common/logging/logger";
import { AppDataSource } from "../../database/data-source";
import { Post } from "../post.entity";

export class PostService {
    static readonly posts = AppDataSource.getRepository(Post);

    static async create(post: Post){
        const createdPost = await this.posts.createQueryBuilder()
            .insert()
            .values({title: post.title, text: post.text })
            .execute();
        return createdPost;
    }

    static async list(){
        const posts = await this.posts.createQueryBuilder()
            .select(["id", "title", "text"])
            .execute();
        return posts;
    }

    static async listById(id:number){
        const post = await this.posts.createQueryBuilder()
            .select()
            .where(`id=${id}`)
            .getOneOrFail();
        Logger.debug(post);
        return post;
    }

    static async update(post: Post){
        const updatedPost = await this.posts.createQueryBuilder()
            .update()
            .set({title: post.title, text: post.text})
            .where(`id=${post.id}`)
            .execute();
        Logger.debug(updatedPost);
        return updatedPost;
    }

    static async delete(id:number){
        const deleted = await this.posts.createQueryBuilder()
            .delete()
            .where(`id=${id}`)
            .execute();
        return deleted;
    }
}