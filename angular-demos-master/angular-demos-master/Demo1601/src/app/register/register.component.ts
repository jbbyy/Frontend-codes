import { Component } from '@angular/core';
import userList from '../modal/user';
import { DataService } from '../service/data.service';
import {NgForm} from '@angular/forms'
import {FormBuilder, Validators, FormControl} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private service: DataService, private fb: FormBuilder) {}
  public user: userList = {};
  public profiles: Array<any> = [];

  add() {
    this.service
      .AddUser(this.user)
      .subscribe((data) => this.profiles.push(this.user));
    this.user = {};
  }

  registerForm = this.fb.group({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });
  //   onSubmitForm(contactform:NgForm){
  // if(contactform.form.valid){
  //  console.log(contactform.form.value);

  // }
  // else{
  //   alert("Please try again")
  // }
  //   }
}
