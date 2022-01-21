/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity('school')
export class SchoolEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'systemId', comment: 'Id do Colégio no sistema Origem', nullable: true})
    systemId?: number;

    @Column({ name: 'name', comment: 'Nome do Colégio', length: 100 })
    name: string;

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt?: Date;

    @Column({ name: 'updated_at' , nullable: true, comment: 'Data da ultima alteração do Registro' } )
    updatedAt?: Date;
}

