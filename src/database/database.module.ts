/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationEntity } from './entities/registration.entity';
import { ResponsibleEntity } from './entities/responsible.entity';
import { SchoolEntity } from './entities/school.entity';
import { StudentEntity } from './entities/student.entity';
import { UnitEntity } from './entities/unit.entity';
import { SchoolRepository } from './repository/school.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'J@060187',
      database: 'student',
      entities: [RegistrationEntity,
                 ResponsibleEntity,
                 SchoolEntity,
                 StudentEntity,
                 UnitEntity,
                ],
      synchronize: true,
    })
  ],
})
export class DatabaseModule { }