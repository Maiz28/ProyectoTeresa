import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
 
  constructor(private authSvc: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authSvc.token$.pipe(
      take(1),
      map( token => (
        !token ? true : false )) //si es diferente de token es true en otro caso es false
    );
  }
}
