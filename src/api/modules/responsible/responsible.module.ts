/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleEntity } from 'src/database/entities/responsible.entity';
import { StudentEntity } from 'src/database/entities/student.entity';
import { StudentService } from '../student/student.service';
import { ResponsibleController } from './responsible.controller';
import { ResponsibleService } from './responsible.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResponsibleEntity, StudentEntity])],
  providers: [ResponsibleService, StudentService],
  exports: [ResponsibleService, StudentService],
  controllers: [ResponsibleController]
})
export class ResponsibleModule {}