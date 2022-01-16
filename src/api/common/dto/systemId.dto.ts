import { ApiProperty } from '@nestjs/swagger';

export class SystemIdDto {
  @ApiProperty({ description: 'SystemId', example: 1 })
  systemId: number;
}
