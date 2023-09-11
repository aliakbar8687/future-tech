export interface CategoryResponse {
    message: string;
    totalRecords?: number;
    payload: Category[]
}
export interface Category {
    _id: string;
    name: string;
    description: string;
    image: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    products: any[]
}
export interface CategoryList {
    id: number;
    name: string;
   description: string;
}

export interface Search {
    categories: Array<Category>;
    performSearch(): void;
}

interface Marks {
    english: number;
    hindi: number;
}