import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import userList from '../modal/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: DataService, private route: Router) {}

  // public userEmail: string = '';
  // public userPass: string = '';
  public userInput: userList = {};
  public userArray: Array<any> = [];

  getUser() {
    this.service
      .GetUser(this.userInput.email, this.userInput.password)
      .subscribe((data: any) => {
        this.userArray = data;
        if (this.userArray.length == 0) {
          alert('Error');
        } else this.route.navigateByUrl(`/profile/${this.userInput.id}`);
      });
  }
}
