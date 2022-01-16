export declare class ResponsibleEntity {
    id: number;
    document: string;
    name: string;
    email: string;
    kinship: 'father' | 'mother' | 'Financial' | 'Pedagogical' | 'Others';
    createdAt: Date;
    updatedAt?: Date;
    RA: string;
}
