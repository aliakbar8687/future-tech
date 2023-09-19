export interface User {
    _id: string;
    id: string;
    firstName: string;
    lastName : string;
    contact :string;
    email :string ;
    gender :string;
    isDeleted: boolean;
    isActive :boolean;
    createdAt :string;
    role: 'admin' | 'super_admin' | 'it'
}
export interface LoginRequest{
    contact : number;
    password : string;
}
export interface LoginResponse{
    message: string;
    token : string;
    user: User
}

export interface SignupRequest {
     firstName: string;   
     lastName: string;   
     email: string;   
     gender: string;   
     contact: number;   
     type: string;   
     password: string;   
}