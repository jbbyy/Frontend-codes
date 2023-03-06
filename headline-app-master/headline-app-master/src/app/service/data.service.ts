import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getNews(a:string){
    return this.http.get(`https://newsapi.org/v2/everything?q=${a}&from=2023-01-12&to=2023-01-12&sortBy=popularity&apiKey=2ea07d450cd04a60bf94204c00fe44f1`)

}
}
