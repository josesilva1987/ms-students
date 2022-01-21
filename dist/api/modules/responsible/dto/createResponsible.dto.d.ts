export declare class CreateResponsibleDto {
    document: string;
    name: string;
    email: string;
    kinship: 'father' | 'mother' | 'Financial' | 'Pedagogical' | 'Others';
    createdAt: Date;
    updatedAt?: Date;
    studentId: number;
}
