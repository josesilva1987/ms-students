/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { ResponsibleEntity } from './responsible.entity';

@Entity('student')
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'RA', comment: 'Registro Acadêmico do Aluno', length: 25, unique: true })
    RA: string;

    @Column({ name: 'name', comment: 'Nome do Aluno', length: 120 })
    name: string;

    @Column({ name: 'email', comment: 'Email do Aluno', nullable: true, length: 120 })
    email?: string;

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt?: Date;

    @Column({ name: 'updated_at', nullable: true, comment: 'Data da ultima alteração do Registro'} )
    updatedAt?: Date;
}

