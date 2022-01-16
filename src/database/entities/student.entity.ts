/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('student')
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'RA', comment: 'Registro Acadêmico do Aluno' })
    RA: string;

    @Column({ name: 'name', comment: 'Nome do Aluno' })
    name: string;

    @Column({ name: 'email', comment: 'Email do Aluno', nullable: true })
    email?: string;

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt: Date;

    @Column({ name: 'updated_at' , nullable: true, comment: 'Data da ultima alteração do Registro'} )
    updatedAt?: Date;
}

