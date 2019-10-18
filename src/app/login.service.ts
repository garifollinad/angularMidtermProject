import {Injectable} from '@angular/core';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {AuthService} from './auth.service';

@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {
  }

  login(
    Username: string,
    Password: string,
    onSuccess: (session: CognitoUserSession, userConfirmationNecessary?: boolean) => void,
    onFailure: (err: any) => void
  ) {
    this.authService.signIn(Username, Password, onSuccess, onFailure);
  }
}
