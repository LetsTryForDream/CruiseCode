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
  selector: 'app-signin',
  imports: [ButtonModule, InputTextModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss',
  standalone: true,
})
export class Signin {
  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
  });
  signIn(): void {
    
  }
}
