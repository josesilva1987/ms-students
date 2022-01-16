import { ApiProperty } from '@nestjs/swagger';

export class IdDto {
  @ApiProperty({ description: 'Id', example: 1 })
  id: number;
}
