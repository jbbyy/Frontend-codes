import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  constructor(private service: DataService, private route: Router) {}

  favArr:Array<any> = [];

  ngOnInit(){
    this.service.getFav().subscribe((data:any) => this.favArr = data);
    
    }
  }

