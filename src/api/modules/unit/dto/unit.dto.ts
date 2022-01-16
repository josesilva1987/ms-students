import { ApiProperty } from "@nestjs/swagger";

export class UnitDto {
    @ApiProperty({ name:'schoolId', example: 1})
    schoolId: number;

    @ApiProperty({ name:'systemId', example: 1, required: false })
    systemId?: number;

    @ApiProperty({ name:'name', example: 'Unidade X'})
    name: string;

    @ApiProperty({ name:'createdAt', example: new Date })
    createdAt: Date;

    @ApiProperty({ name:'updatedAt', example: new Date, required: false })
    updatedAt?: Date;
}

