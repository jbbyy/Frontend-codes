import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: DataService) {}

  username :string = " "
  ngOnInit(){
    this.service.usernameSubject.subscribe((data:any) => this.username = data);
  }
}
