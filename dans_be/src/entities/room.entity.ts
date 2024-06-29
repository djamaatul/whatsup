import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tm_room')
export class Room {
    @PrimaryGeneratedColumn({ type: 'integer' })
    room_id: number = 0;

    @Column({ type: 'varchar' })
    name: string = ''
}