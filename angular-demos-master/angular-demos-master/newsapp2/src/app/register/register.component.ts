import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private service: DataService, private fb: FormBuilder, private router:Router) {}

  registerForm = this.fb.group({
    firstname: new FormControl(''),
    lasttname: new FormControl(''),
    age: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    this.service.register(this.registerForm.value).subscribe(data => console.log(data));
    this.router.navigate(['/login']);
  }
}
