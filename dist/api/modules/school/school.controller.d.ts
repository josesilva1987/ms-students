import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { SchoolEntity } from "src/database/entities/school.entity";
import { SchoolDto } from "./dto/school.dto";
import { SchoolService } from "./school.service";
export declare class SchoolController {
    private schoolService;
    constructor(schoolService: SchoolService);
    getSchools(): Promise<SchoolEntity[]>;
    getSchoolById(params: IdDto): Promise<SchoolEntity>;
    getSchoolBySystemId(params: IdDto): Promise<SchoolEntity[]>;
    createSchool(payload: SchoolEntity): Promise<SchoolDto | CreateOrUpdateResponseDto>;
    UpdateSchool(params: IdDto, payload: SchoolEntity): Promise<CreateOrUpdateResponseDto>;
}
