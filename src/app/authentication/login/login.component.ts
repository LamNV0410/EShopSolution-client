import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthenticationEndpoint } from 'sdk/api-sdk-js/src/services/authentication/endpoints/authentication-endpoint';
import { UserLoginRequest } from 'sdk/api-sdk-js/src/services/authentication/requests/user-login-request';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserLoginHub } from 'sdk/api-sdk-js/src/services/authentication/hubs/user-login-hub';
import { DeviceInfo } from 'sdk/api-sdk-js/src/services/authentication/models/device-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userLoginHub!: UserLoginHub;

  public authenticationEndpoint!: AuthenticationEndpoint;
  public loginForm: FormGroup = Object.create(null);
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });

    this.generateEndpoint();
    this.genarateHub();
  }

  ngOnDestroy(): void {
    this.userLoginHub.dispose();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      let request: UserLoginRequest = {
        userName: this.loginForm.controls['uname'].value,
        password: this.loginForm.controls['password'].value
      }
      this.authenticationEndpoint
        .login(request)
        .then(res => {
          if (res) {
            this._authService.setLoginSucess(res.token);
            var user = this._authService.getTokenInfo();
            let device: DeviceInfo = { name: 'A', os: 'os', version: 'ver' }
            let request: any = { userId: user.userId, firstName: 'a', lastName: 'b', deviceInfo: device }
            this.userLoginHub.joinLogin(request);
            this.router.navigate(['/categories-management']);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
    // 
  }

  private generateEndpoint() {
    this.authenticationEndpoint = new AuthenticationEndpoint();
  }

  private genarateHub() {
    this.userLoginHub = new UserLoginHub();
  }
}
