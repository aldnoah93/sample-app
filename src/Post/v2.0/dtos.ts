export interface PostDto {
    id: number;
    title: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}

export type PostCreateDto =  Readonly<Pick<PostDto, "title" | "text">>;
export type PostCreatedDto = Readonly<PostDto>;
export type PostUpdateDto = Readonly<Pick< PostDto, "id" | "title" | "text">>;
export type PostDeleteDto = Readonly<Pick< PostDto, "id">>;
