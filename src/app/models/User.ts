export interface User {
    id: string;
    name: string;
    role: 'admin' | 'super_admin' | 'it'
}

export interface loginRequest {
    contact: number
    password: string
}
export interface loginResponse{
    message: string;
    token : string;
    user: User
}

export interface signupRequest{
 firstName: string;
 lastName:string;
 email:string;
 gender:string;
 contact: number;
 type:string;
 password:string
}