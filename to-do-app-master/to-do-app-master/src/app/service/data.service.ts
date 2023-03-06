import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http:HttpClient) { }
  Add(data:any){
    return this.Http.post('http://localhost:3000/task', data);
  }

  Get(){
    return this.Http.get<any[]>('http://localhost:3000/task');
  }

  Delete(id:number){
    return this.Http.delete(`http://localhost:3000/task/${id}`);
  }
}
