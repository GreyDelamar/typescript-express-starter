import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
    export class sampleTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}
