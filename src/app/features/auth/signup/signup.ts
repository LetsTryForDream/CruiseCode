import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ButtonModule, InputTextModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
  standalone: true,
})
export class Signup {
  signUpForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
  });
  signUp(): void {
    
  }
}
