"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsibleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const responsible_entity_1 = require("../../../database/entities/responsible.entity");
const student_entity_1 = require("../../../database/entities/student.entity");
const student_service_1 = require("../student/student.service");
const responsible_controller_1 = require("./responsible.controller");
const responsible_service_1 = require("./responsible.service");
let ResponsibleModule = class ResponsibleModule {
};
ResponsibleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([responsible_entity_1.ResponsibleEntity, student_entity_1.StudentEntity])],
        providers: [responsible_service_1.ResponsibleService, student_service_1.StudentService],
        exports: [responsible_service_1.ResponsibleService, student_service_1.StudentService],
        controllers: [responsible_controller_1.ResponsibleController]
    })
], ResponsibleModule);
exports.ResponsibleModule = ResponsibleModule;
//# sourceMappingURL=responsible.module.js.map