import { loginResponse } from './../models/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, loginRequest } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User = {
    id: '123',
    name: 'abcd',
    role: 'it'
  }
  isLoggedIn$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  login(data: loginRequest): Observable<loginResponse> {
    return this.http.post<loginResponse>('admin/login',data);
  }
  
  signup(data: loginRequest): Observable<loginResponse> {
    return this.http.post<loginResponse>('admin', data)    
  }

  logout(): void {
    this.isLoggedIn$.next(null)
  }
}
