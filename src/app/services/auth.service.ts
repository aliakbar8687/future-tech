import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  login() {
    this.isLoggedIn$.next(true)
  }

  logout() {
    this.isLoggedIn$.next(false)
  }
}
