import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest, LoginResponse, SignupRequest } from '../models/User';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http:HttpClient
  ) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('admin/login',data);
  }

  signup(data: SignupRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('admin',data);
  }

  logout():void {
    this.isLoggedIn$.next(false)
  }
  
}
