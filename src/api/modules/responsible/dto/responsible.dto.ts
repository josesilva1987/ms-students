import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class ResponsibleDto {
    @ApiProperty({ name:'document', example: "2345678900" })
    document: string;

    @ApiProperty({ name:'name', example: "Responsible X" })
    name: string;

    @ApiProperty({ name:'email', example: "teste@teste.com.br"})
    email: string;

    @ApiProperty({ name:'kinship', example: "Financial" })
    kinship: 'father' | 'mother' | 'Financial' | 'Pedagogical' | 'Others';

    @ApiProperty({ name:'RA', example: "123456" })
    RA: string;
}

