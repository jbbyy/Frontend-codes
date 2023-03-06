import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http:HttpClient) { }

  AddUser(user:any){
    return this.Http.post('http://localhost:3000/profiles', user);
  }

  GetUser(email:any, password:any){
    return this.Http.get(`http://localhost:3000/profiles?email=${email}&password=${password}`);
  }

  public usernameSubject = new Subject();
  public isLoggedInSubject = new BehaviorSubject(false);
}
