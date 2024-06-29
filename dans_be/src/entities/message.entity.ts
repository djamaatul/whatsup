import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./user.entity.js";
import { Room } from "./room.entity.js";

@Entity('tx_message')
export class Message {
    @PrimaryGeneratedColumn({ type: 'integer'})
    message_id: number = 0;

    @Column({ type: 'varchar'})
    content: string = '';

    @CreateDateColumn({ type: 'date'})
    timestamp?: Date;

    @ManyToOne(() => Room, (room) => room.room_id)
    room_id?: Room;

    @ManyToOne(() => User, user => user.user_id)
    user_id?: User;
}