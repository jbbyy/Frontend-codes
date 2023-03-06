import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent {
  constructor(private fb: FormBuilder) {}
  public blog: Array<any> = [
    { value: 'Clothes-0', viewValue: 'Clothes' },
    { value: 'Cars-1', viewValue: 'Car' },
    { value: 'Food-3', viewValue: 'Food' },
  ];

  registerform = this.fb.group({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    select: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    toggle: new FormControl('', Validators.required),
  });

  //need get and set to get the fname from HTML

  get fname() {
    return this.registerform.get('fname');
  }
  get lname() {
    return this.registerform.get('lname');
  }
  get address() {
    return this.registerform.get('address');
  }
  get date() {
    return this.registerform.get('date');
  }
  get email() {
    return this.registerform.get('email');
  }
  get gender() {
    return this.registerform.get('gender');
  }
  get select() {
    return this.registerform.get('select');
  }

  onSubmit() {}
}
