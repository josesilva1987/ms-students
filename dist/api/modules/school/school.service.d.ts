import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { SchoolEntity } from "src/database/entities/school.entity";
import { SchoolRepository } from "src/database/repository/school.repository";
import { SchoolDto } from "./dto/school.dto";
export declare class SchoolService {
    private schoolRespository;
    constructor(schoolRespository: SchoolRepository);
    getSchool(): Promise<SchoolEntity[]>;
    getSchoolById(id: number): Promise<SchoolEntity>;
    getSchoolBySystemaId(systemId: number): Promise<SchoolEntity[]>;
    createSchool(payload: SchoolDto | SchoolEntity): Promise<any>;
    updateSchool(id: number, payload: SchoolDto): Promise<CreateOrUpdateResponseDto>;
}
