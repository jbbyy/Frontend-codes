import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  getNews(){
    return this.http.get(environment.apiURL);
  }

  register(x:any){
    return this.http.post(environment.authURL+'/register',x );
  }

  login(x:any){
    return this.http.post(environment.authURL +'/login', x);
  }

  tokenValid(x:any){
    return this.http.post(environment.authURL + '/isAuthenticated', x);
  }

  addFav(x:any){
    return this.http.post(environment.jsonURL, x)
  }

  getFav(){
    return this.http.get(environment.jsonURL);
  }
}
