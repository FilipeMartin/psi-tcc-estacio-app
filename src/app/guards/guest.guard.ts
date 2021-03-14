import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.authService.isLoggedIn || this.router.parseUrl('/inicio');
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

}
