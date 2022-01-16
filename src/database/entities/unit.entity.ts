/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('unit')
export class UnitEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'schoollId', comment: 'Código da Escola', nullable: true })
    schoolId: number;

    @Column({ name: 'systemId', comment: 'Id do Colégio no sistema Origem', nullable: true})
    systemId?: number;

    @Column({ name: 'name', comment: 'Nome do Aluno' })
    name: string;

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt: Date;

    @Column({ name: 'updated_at' , nullable: true, comment: 'Data da ultima alteração do Registro'} )
    updatedAt?: Date;
}

