import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private service2: RouterService,

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

  loginSubmit() {
    if (this.loginForm.valid) {
      this.service.authenticateUser(this.loginForm.value).subscribe(
        (data: any) => {
          console.log(data);
          this.service.setBearerToken(data);
          this.service2.routeToDashboard();
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
