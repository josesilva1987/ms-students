import { ApiProperty } from '@nestjs/swagger';

export class DocumentDto {
  @ApiProperty({ description: 'document', example: "12345678900" })
  document: string;
}
