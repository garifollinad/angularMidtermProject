import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    return this.authService.checkValidSession((noActiveSession, session: CognitoUserSession) => {
      if (session && session.isValid()) {
        return true;
      }

      return this.router.createUrlTree(['/portal/signIn']);

    });

  }
}
