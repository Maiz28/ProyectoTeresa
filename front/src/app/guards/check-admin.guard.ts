import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  isAdmin = null;

  constructor(private authSvc: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.isUserAdmin$.pipe(
      take(1),
      tap((canEdit) => {
        if(canEdit === false){
          console.log(canEdit)
          this.router.navigate(["/login"]);
            Swal.fire({
                title: 'Acceso denegado',
                text: 'No eres un administrador'
              });
        }
        return this.authSvc.isUserAdmin$;
      })
    );
  }
}