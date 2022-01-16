/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolEntity } from 'src/database/entities/school.entity';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolEntity])],
  providers: [SchoolService],
  exports: [SchoolService],
  controllers: [SchoolController]
})
export class SchoolModule {}