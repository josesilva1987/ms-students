export declare class ResponsibleDto {
    document: string;
    name: string;
    email: string;
    kinship: 'father' | 'mother' | 'Financial' | 'Pedagogical' | 'Others';
    createdAt: Date;
    updatedAt?: Date;
    RA: string;
}
