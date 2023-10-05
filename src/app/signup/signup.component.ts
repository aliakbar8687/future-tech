import { CustomValidationMessage } from './../shared/CustomValidationMessage';
import { formErrorsVar } from './../shared/FormErrorVar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { CustomValidator } from '../shared/CustomValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupFormSubscription: Subscription;

  formErrors: any = formErrorsVar;
  formErrorsMessage = CustomValidationMessage.validationMassage;  
  
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(4)]],
      lastName: [null, [Validators.required, Validators.minLength(4)]],
      email: [null],
      gender: ['male'],
      contact: [null, [Validators.required, Validators.minLength(9), CustomValidator.onlyNumber]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      role: [null, Validators.required],
      skill: this.fb.array([this.getSkillFromGroup()])
    });
  
    this.signupFormSubscription = this.signupForm.valueChanges.subscribe(value => this.validateForm());
  }
  
  get skill(): FormArray{
     return this.signupForm.get('skill') as FormArray
   }


  getSkillFromGroup(): FormGroup{
    return this.fb.group({
      name: [],
      extra: []
    })
  }

  addSkill(){
    this.skill.push(this.getSkillFromGroup())
  }

  removeSkill(index: number){
    this.skill.removeAt(index);
  }

    ngOnDestroy(){
      this.signupFormSubscription?.unsubscribe();
    }

    signup() {
      if (this.isFormInvalid()) return;
      
      console.log(this.signupForm);
      
      this.signupForm.markAllAsTouched();
      
    this._authService.signup(this.signupForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isFormInvalid(): boolean{
    this.signupForm.markAllAsTouched();
    this.validateForm();
    return this.signupForm.invalid;
  }

  get controls() {
    return this.signupForm.controls;
  }

  validateForm(group: FormGroup = this.signupForm) {
    Object.keys(group.controls).forEach((controlKey: string) => {
      const control: AbstractControl = group.get(controlKey) as AbstractControl;
      (this.formErrors as any)[controlKey] = '';

      if (
        control &&
        control.invalid &&
        (control.dirty || control.touched)
      ){
        if (control.errors){
          Object.keys(control.errors).forEach(key =>{
            (this.formErrors as any)[controlKey] = (this.formErrorsMessage as any)[controlKey][key];
          })
        }
      }
    })
  }
  

  reset() {
    this.signupForm.reset();
  }
}
