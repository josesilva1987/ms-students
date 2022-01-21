import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class StudentDto {
    @ApiProperty({ name:'RA', example: '123456' })
    RA: string;

    @ApiProperty({ name:'name', example: 'Aluno X' })
    name: string;

    @ApiProperty({ name:'email', example: 'exemplo@exemplo.com.br', required: false })
    email?: string;
}

