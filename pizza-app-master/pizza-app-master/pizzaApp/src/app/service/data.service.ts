import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(' http://localhost:3000/Products');
  }

  addCart(x: any) {
    return this.http.post('http://localhost:3000/Cart', x);
  }

  getCart() {
    return this.http.get('http://localhost:3000/Cart');
  }

  updateCart(id:any, x:any){
    return this.http.put(`http://localhost:3000/Cart/${id}`, x);
  }

  deleteItem(id:any){
     return this.http.delete(`http://localhost:3000/Cart/${id}`)
  }
  
}
