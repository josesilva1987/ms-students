/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrUpdateResponseDto {
  @ApiProperty({ description: 'Inserted/Updated Id', example: 123456, required: false })
  id?: number;

  @ApiProperty({ description: 'Inserted/Updated RA', example: '123456', required: false })
  RA?: string;

  @ApiProperty({ description: 'Affected rows', example: 1, required: false })
  rowAffected?: number;
}
