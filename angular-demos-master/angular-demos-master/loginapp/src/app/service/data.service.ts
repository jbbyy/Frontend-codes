import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../Environment/Environment';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  register(x: any) {
    return this.http.post(environment.apiURL + '/register', x);
  }

  login(x: any) {
    return this.http.post(environment.apiURL + '/login', x);
  }

  tokenValid() {
    return this.http.post(environment.apiURL + '/isAuthenticated', null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
  public usernameSubject = new BehaviorSubject('Guest');
  public isloggedIn = new BehaviorSubject(false);
}
