import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
   passwordValue:string;
   contactValue:string;
  constructor(
    private fb: FormBuilder,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      contact: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login() {
console.log(this.loginForm.value);

  }

  reset() {
    this.loginForm.reset();
  }
}
