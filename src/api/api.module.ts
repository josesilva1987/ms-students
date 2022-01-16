import { Module } from '@nestjs/common';
import { ResponsibleModule } from './modules/responsible/responsible.module';
import { SchoolModule } from './modules/school/school.module';
import { StudentModule } from './modules/student/student.module';
import { UnitModule } from './modules/unit/unit.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SchoolModule,
    UnitModule,
    StudentModule,
    ResponsibleModule,
  ],
})
export class ApiModule {}
