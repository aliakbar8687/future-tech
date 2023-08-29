import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
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

  constructor() { }

  login() {
    this.isLoggedIn$.next(this.user)
  }

  logout() {
    this.isLoggedIn$.next(null)
  }
}
