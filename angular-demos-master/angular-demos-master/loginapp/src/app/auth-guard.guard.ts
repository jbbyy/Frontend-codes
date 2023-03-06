import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DataService } from './service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private service: DataService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.tokenValid().pipe(map((data:any)=>{
      if(data.isAuthenticated){
        return true
      }
      return false;
    }),
    catchError((err, HttpErrorResponse)=>{
      this.route.navigateByUrl('/login');
      return throwError('Error')
    }))
  }
  
}
