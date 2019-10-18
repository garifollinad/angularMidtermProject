import { Component } from '@angular/core';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {LoginService} from '../../login.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginAccount = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private loginService: LoginService,
              private router: Router,
              private fb: FormBuilder) { }

  onSubmit() {
    const {username, password} = this.loginAccount.value;

    this.loginService.login(
      username,
      password,
      this.onSuccess.bind(this),
      this.onFailure.bind(this)
    );

  }

  onSuccess(session: CognitoUserSession) {
    this.router.navigate(['dashboard'])
  }

  onFailure(err: any) {
    this.loginAccount.setErrors({'loginFailed': true})
  }

}
