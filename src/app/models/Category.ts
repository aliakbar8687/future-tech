export interface Category {
    id: number;
    name: string;
    fees: number;
    admissionDate: Date | string | number;
    description: string;
    marks?: Marks
}

export interface Search {
    categories: Array<Category>;
    performSearch(): void;
}

interface Marks {
    english: number;
    hindi: number;
}