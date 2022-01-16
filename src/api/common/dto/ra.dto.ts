import { ApiProperty } from '@nestjs/swagger';

export class RADto {
  @ApiProperty({ description: 'RA', example: "123456" })
  RA: string;
}
