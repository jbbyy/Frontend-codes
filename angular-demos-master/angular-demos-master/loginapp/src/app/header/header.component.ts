import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private route:Router, private service : DataService) {}
email:string = '';
isloggedIn = false; 
ngOnInit(){
  this.service.usernameSubject.subscribe((data:any) => this.email= data)
  this.service.isloggedIn.subscribe((data:any)=> this.isloggedIn = data);
}
logOut(){
  localStorage.clear();
  this.route.navigateByUrl('/');
  this.service.isloggedIn.next(false);
}
}
