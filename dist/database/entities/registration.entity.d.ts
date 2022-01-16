export declare class RegistrationEntity {
    id: number;
    schoolId: number;
    unitId: number;
    studentId: number;
    year: number;
    status: 'Matrículado' | 'Transferido' | 'Cancelado';
    hash: string;
    createdAt: Date;
    updatedAt?: Date;
}
