import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordValue: string;
  contactValue: string;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      contact: new FormControl(null),
      password: new FormControl(null),
    });
  }

  login() {
    this._authService
        .login(this.loginForm.value)
        .subscribe(
          res => {
            const token = res.token;
            localStorage.setItem('token', token);
            this.router.navigate(['/']);
          },
          err => this.errorMessage = err.msg
        );
  }

  reset() {
    this.loginForm.reset();
  }
}
