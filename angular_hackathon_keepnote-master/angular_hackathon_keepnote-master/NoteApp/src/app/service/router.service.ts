import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private http: HttpClient, private route: Router) {}

  routeToDashboard() {
    return this.route.navigateByUrl('/');
  }
  //to navigate to dashboard route
  routeToLogin() {
    return this.route.navigateByUrl('/login');
  }
}
//to navigate to login route
