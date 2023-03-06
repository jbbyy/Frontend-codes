import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  Add(x:any){
    return this.http.post('http://localhost:3000/track', x)
  }

  Get(){
    return this.http.get('http://localhost:3000/track');
  }

  Delete(id:any){
    return this.http.delete(`http://localhost:3000/track/${id}`);
  }
}
