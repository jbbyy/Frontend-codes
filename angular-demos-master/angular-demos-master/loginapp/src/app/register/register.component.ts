import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.service.register(this.registerForm.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        (err: HttpErrorResponse) => {
          alert('An error has occured');
        }
      );
    } 
    else 
    {
      alert("Form invalid")
    }
  }
}
