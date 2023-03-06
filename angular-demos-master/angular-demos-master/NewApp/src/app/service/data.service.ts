import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ea07d450cd04a60bf94204c00fe44f1'
    );
  }

  login(x: any) {
    return this.http.post('http://localhost:9000/auth/login', x);
  }

  //deosnt require body hence pass null, but require headers
  tokenValid() {
    return this.http.post('http://localhost:9000/auth/isAuthenticated', null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  register(x: any) {
    return this.http.post('http://localhost:9000/auth/register', x);
  }

  public isloggedIn = new BehaviorSubject(false);

  public fav = new Subject();
  public arr: Array<any> = [];

  addFav(y: any) {
    // this.arr.push(y)
    // this.fav.next(this.arr);
    return this.http.post('http://localhost:3000/favorites', y);
  }

  getFav() {
    return this.http.get('http://localhost:3000/favorites');
  }
}

