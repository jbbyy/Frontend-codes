import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private service: DataService, private route:Router){}

news : Array<any> = [];
ngOnInit(){
this.getNews();

}

getNews(){
return this.service.getNews().subscribe((data: any) => this.news = data.articles);
}

addFav(x:any){
return this.service.addFav(x).subscribe(data => {console.log(data);
alert("Added to favorites")});

}
}
