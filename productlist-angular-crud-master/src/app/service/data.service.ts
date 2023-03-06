import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import productclass from 'model/productclass'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

addproduct(data:productclass){
  //data is an instance of the productclass ( class created in model)
  return this.http.post('http://localhost:3000/list', data)
  //post requires 2 parameters. 1 URL that you are storing your data in AND the data you wish to store
  //URL is the json url and the array inside of it

}

getproduct(){
  return this.http.get('http://localhost:3000/list')
}

deleteproduct(id:any){
  return this.http.delete(`http://localhost:3000/list/${id}`)
}

updateproduct(id:any, updt:any){
  return this.http.patch(`http://localhost:3000/list/${id}`, updt)
}
}


