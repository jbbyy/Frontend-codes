import { Component } from '@angular/core';
import userList from '../modal/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
constructor(private service: DataService) {}
public userList: userList ={}
  


}
