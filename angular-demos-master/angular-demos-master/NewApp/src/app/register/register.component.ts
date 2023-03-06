import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
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
    firstname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get age() {
    return this.registerForm.get('age');
  }

  submit(){
    if(this.registerForm.valid){
    this.service.register(this.registerForm.value).subscribe((data) => 
    {console.log(data);
      this.router.navigate(['/login']);
    }, (err:HttpErrorResponse) =>{
      alert("Error Occurred")
    }
    );
  }
    else{
    alert("Form Invalid")
    }
    }
  }

