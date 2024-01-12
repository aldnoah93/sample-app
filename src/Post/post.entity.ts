import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @CreateDateColumn({ name: 'created_at',type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at',type: "timestamptz", default: () => "CURRENT_TIMESTAMP"  }) 
    updatedAt: Date;
}