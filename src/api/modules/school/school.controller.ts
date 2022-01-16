import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { SystemIdDto } from "src/api/common/dto/systemId.dto";
import { SchoolEntity } from "src/database/entities/school.entity";
import { SchoolDto } from "./dto/school.dto";
import { SchoolService } from "./school.service";

@ApiTags('Schools')
@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) { }

    @Get()
    @ApiOperation({ summary: 'Get all Schools' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getSchools(): Promise<SchoolEntity[]> {
        return this.schoolService.getSchool();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Schools by Id' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getSchoolById(@Param() params: IdDto): Promise<SchoolEntity> {
        return this.schoolService.getSchoolById(params.id);
    }

    @Get(':systemId')
    @ApiOperation({ summary: 'Get Schools by systemId' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getSchoolBySystemId(@Param() params: IdDto): Promise<SchoolEntity[]> {
        return this.schoolService.getSchoolBySystemaId(params.id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a School' })
    @ApiBody({ required: true, type: SchoolDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: SchoolDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async createSchool(@Body() payload: SchoolDto): Promise<SchoolDto | CreateOrUpdateResponseDto>{
        return this.schoolService.createSchool(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a School by systemId' })
    @ApiBody({ required: true, type: SchoolDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: SchoolDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async UpdateSchool(@Param() params: IdDto, @Body() payload: SchoolDto): Promise<CreateOrUpdateResponseDto>{
        return this.schoolService.updateSchool(params.id, payload);
    }
}