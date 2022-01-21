import { ApiProperty } from "@nestjs/swagger";

export class UnitDto {
    @ApiProperty({ name:'schoolId', example: 1})
    schoolId: number;

    @ApiProperty({ name:'systemId', example: 1, required: false })
    systemId?: number;

    @ApiProperty({ name:'name', example: 'Unidade X'})
    name: string;
}

