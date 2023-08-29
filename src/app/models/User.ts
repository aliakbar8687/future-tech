export interface User {
    id: string;
    name: string;
    role: 'admin' | 'super_admin' | 'it'
}