import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
constructor(private service:DataService){}
  fav:Array<any> = [];

  ngOnInit(){
    return this.service.getFav().subscribe((data:any)=> this.fav = data)
  }

  
}
