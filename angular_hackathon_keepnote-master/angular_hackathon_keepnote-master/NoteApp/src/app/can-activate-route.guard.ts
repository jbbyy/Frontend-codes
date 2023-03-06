import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';
import { catchError, map, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterService } from './service/router.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateRouteGuard implements CanActivate {
  constructor(private service: AuthenticationService, private route: Router, private service2 : RouterService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ):| Observable<boolean | UrlTree>| Promise<boolean | UrlTree>| boolean| UrlTree {
    return this.service.isUserAuthenticated().pipe( map((data: any) => {
        if (data.isAuthenticated) {
          return true;
        }
        return false;
      }),
      catchError((err: HttpErrorResponse) => {
       this.service2.routeToLogin();
        return throwError(err);
      })
    );
  }
}
