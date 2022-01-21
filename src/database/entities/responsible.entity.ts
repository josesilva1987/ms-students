/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { StudentEntity } from './student.entity';

@Entity('responsible')
export class ResponsibleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'document', comment: 'Documento do Responsável', length: 18 })
    document: string;

    @Column({ name: 'name', comment: 'Nome do Responsável', length: 100 })
    name: string;

    @Column({ name: 'email', comment: 'Email do Aluno', length: 100 })
    email: string;

    @Column({ name: 'kinship', comment: 'Grau de Parentesco', length: 12 })
    kinship: string;

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt: Date;

    @Column({ name: 'updated_at' , nullable: true, comment: 'Data da ultima alteração do Registro'} )
    updatedAt?: Date;

    @Column({ name: 'studentId', comment: 'Id do Aluno' })
    studentId: number;
}

