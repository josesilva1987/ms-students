/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { StudentEntity } from './student.entity';

@Entity('responsible')
export class ResponsibleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'document', comment: 'Documento do Responsável' })
    document: string;

    @Column({ name: 'name', comment: 'Nome do Responsável' })
    name: string;

    @Column({ name: 'email', comment: 'Email do Aluno' })
    email: string;

    @Column({ name: 'kinship', comment: 'Grau de Parentesco' })
    kinship: 'father' | 'mother' | 'Financial' | 'Pedagogical' | 'Others';

    @Column({ name: 'created_at', comment: 'Data de criação do Registro' })
    createdAt: Date;

    @Column({ name: 'updated_at' , nullable: true, comment: 'Data da ultima alteração do Registro'} )
    updatedAt?: Date;

    @ManyToOne(() => StudentEntity, student => student.RA)
    @JoinColumn({name:'RA'})
    @Column({ name: 'RA', comment: 'RA do Aluno' })
    RA: string;
}

