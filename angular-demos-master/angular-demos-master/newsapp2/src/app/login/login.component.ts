import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private service: DataService, private fb: FormBuilder, private router:Router) {}

  loginForm = this.fb.group({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    this.service.login(this.loginForm.value).subscribe((data:any) => {console.log(data);
      localStorage.setItem('token', data.access_token);
      this.router.navigate(['/']);
    }
    );
    
  }
}


