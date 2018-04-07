import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Test extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}