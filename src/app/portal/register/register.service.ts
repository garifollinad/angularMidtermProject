import {Injectable} from '@angular/core';
import {AuthService} from '../../auth.service';

@Injectable()
export class RegisterService {

  constructor(private authService: AuthService) {
  }

  public registerAccount(username, password, callback) {
    return this.authService.signUp(username, password, callback);
  }
}
