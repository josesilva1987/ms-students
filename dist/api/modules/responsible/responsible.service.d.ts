import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { ResponsibleEntity } from "src/database/entities/responsible.entity";
import { ResponsableRepository } from "src/database/repository/responsible.repository";
import { StudentService } from "../student/student.service";
import { ResponsibleDto } from "./dto/responsible.dto";
export declare class ResponsibleService {
    private responsibleRepository;
    private studentService;
    constructor(responsibleRepository: ResponsableRepository, studentService: StudentService);
    getResponsibles(): Promise<ResponsibleEntity[]>;
    getResponsibleById(id: number): Promise<ResponsibleEntity>;
    getResponsibleByDocument(document: string): Promise<ResponsibleEntity>;
    updateResponsible(id: number, payload: ResponsibleDto): Promise<CreateOrUpdateResponseDto>;
    createResponsible(payload: ResponsibleDto | ResponsibleEntity): Promise<any>;
}
