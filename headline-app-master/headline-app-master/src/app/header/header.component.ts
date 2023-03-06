import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private service : DataService){}
  
  public a: string = "tesla"
  public news: Array<any> = [];
  ngOnInit(){
    this.service.getNews(this.a).subscribe((data:any)=>(this.news = data.articles));
    console.log(this.news)
     
  }

  search(){
    this.ngOnInit();
  }




}
