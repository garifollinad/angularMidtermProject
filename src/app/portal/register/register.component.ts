import { Component } from '@angular/core';
import {RegisterService} from "./register.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerAccount = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatPassword: ['', Validators.required],
  }, {validator: this.passwordMatchValidator});

  constructor(private registerService: RegisterService,
              private fb: FormBuilder,
              private router: Router) { }

  onSubmit() {
    const {username, password} = this.registerAccount.value;

    this.registerService.registerAccount(username, password, (err, response) => {
      if(err){
        if(err.code === "UsernameExistsException"){
          this.registerAccount.setErrors({'usernameTaken': true});
        } else {
          this.registerAccount.setErrors({'incognitoError': true});
        }
        return;
      }

      this.router.navigate(['/signIn']);
    });
  }

  passwordMatchValidator(frm: FormGroup) {
    const {password, repeatPassword} = frm.controls;

    return password.value === repeatPassword.value ? null : {'mismatch': true};
  }

}
