import { MigrationInterface, QueryRunner } from "typeorm";

export class PostCreateAtUpdatedAt1705098628421 implements MigrationInterface {
    name = 'PostCreateAtUpdatedAt1705098628421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created_at"`);
    }

}
