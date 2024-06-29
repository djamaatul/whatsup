import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tm_user')
export class User {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'user_id' })
    user_id?: number = 0;

    @Column({ type: 'varchar', name: 'name' })
    name: string = '';

    @Column({ unique: true, type: 'varchar', name: 'email' })
    email: string = '';

    @Column({ type: 'varchar', name: 'password' })
    password: string = '';
}