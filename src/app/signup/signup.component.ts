import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      contact: new FormControl(null),
      password: new FormControl(null),
      gender: new FormControl('female'),
      type: new FormControl('admin'),
    })
  }

  signup() {
    this._authService
        .signup(this.signupForm.value)
        .subscribe(
          res => {
            this.router.navigate(['/login']);
          },
          err => {
            console.log(err);
          }
        );
  }

  reset() {
    this.signupForm.reset();
  }
}

