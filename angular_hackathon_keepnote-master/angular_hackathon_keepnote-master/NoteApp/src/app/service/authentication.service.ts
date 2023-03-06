import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../Environment/Environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  routeToLogin() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  authenticateUser(x: any) {
    return this.http.post(environment.authUrl + '/login', x);
  }
  //to get the user authenticated - accepts { username, password } and returns server response

  setBearerToken(token: any) {
    return localStorage.setItem('bearerToken', token.access_token);
  }
  //to save user token in local storage with key bearerToken - accepts the token string

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }
  //to fetch user token from local storage
  isUserAuthenticated() {
    return this.http.post(environment.authUrl + '/isAuthenticated', null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('bearerToken')}`,
      },
    });
  } //to validate authenticity of a user - accepts the token string and returns Promise of authenticated status of user

  public isloggedIn = new BehaviorSubject(false);
}
