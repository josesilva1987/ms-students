import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class SchoolDto {
    @ApiProperty({ name:'systemId', example: 1, required: false })
    systemId?: number;

    @ApiProperty({ name:'name', example: "Colégio X" })
    name: string;

    @ApiProperty({ name:'createdAt', example: new Date })
    createdAt: Date;

    @ApiProperty({ name:'updatedAt', example: new Date, required: false })
    updatedAt?: Date;
}

