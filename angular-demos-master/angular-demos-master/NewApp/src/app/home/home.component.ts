import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private service:DataService, private route: Router){}

public news:Array<any> = []

loggedIn :any = false;
ngOnInit(){
  
    this.getnew();
    this.service.isloggedIn.subscribe(data => this.loggedIn = data);
    
    
}

getnew(){
  this.service.getNews().subscribe((data: any) => this.news = data.articles);
  console.log(this.news)
}

addFav(x:any){
  this.service.isloggedIn.subscribe(data => this.loggedIn = data)
  if(this.loggedIn == false){
     this.route.navigate(['/login']);
  }
  else{

    this.service.addFav(x).subscribe(data => console.log(data));
    // this.service.fav.next(x);
    console.log(x);
    alert("Added to fav")
  }
}
}
