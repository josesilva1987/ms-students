/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('registration')
export class RegistrationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'schoolId', comment: 'Código da Escola' })
    schoolId: number;

    @Column({ name: 'unitId', comment: 'Código da Unidade' })
    unitId: number;

    @Column({ name: 'studentId', comment: 'Código do Aluno' })
    studentId: number;

    @Column({ name: 'year', comment: 'Ano Letivo' })
    year: number;

    @Column({ name: 'status', comment: 'Status da Matrícula do Aluno' })
    status: 'Matrículado' | 'Transferido' | 'Cancelado';

    @Column({ name: 'hash', comment: 'Hash da matricula' })
    hash: string;

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt: Date;

    @Column({ name: 'updated_at' , nullable: true, comment: 'Data da ultima alteração do Registro'} )
    updatedAt?: Date;
}

