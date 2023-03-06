import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(
        (data: any) => {
          console.log(data);
          localStorage.setItem('token', data.access_token);
          this.router.navigate(['/']);
          this.service.isloggedIn.next(true);
         
          console.log(data.access_token);
        },
        (err: HttpErrorResponse) => {
          alert('Error has Occurred');
        }
      );
    } else {
      alert('Login invalid, please try again.');
    }
  }
}
