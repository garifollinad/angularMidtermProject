import {Injectable} from '@angular/core';
import {CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserSession} from 'amazon-cognito-identity-js';

@Injectable()
export class AuthService {
  private poolData = {
    UserPoolId: 'eu-west-2_WPz3ycGA8',
    ClientId: '2r6qlaimk6jungoma3j4dt286n'
  };
  private userPool = new CognitoUserPool(this.poolData);

  constructor() {
  }

  public signUp(
    username: string,
    password: string,
    callBack: (err: any) => void
  ) {
    this.userPool.signUp(username, password, null, null, callBack);
  }

  public signIn(
    Username: string,
    Password: string,
    onSuccess: (session: CognitoUserSession, userConfirmationNecessary?: boolean) => void,
    onFailure: (err: any) => void
  ) {

    const authData = {Username, Password};
    const authenticationDetails = new AuthenticationDetails(authData);

    const userData = {
      Username,
      Pool: this.userPool
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {onSuccess, onFailure});
  }

  public signOut() {
    const cognitoUser = this.userPool.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.signOut();
    }
  }

  public checkValidSession(
    callback: Function
  ) {
    const cognitoUser = this.userPool.getCurrentUser();

    if (cognitoUser != null) {
      return cognitoUser.getSession(callback);
    } else {
      return callback('no active session');
    }
  }
}
