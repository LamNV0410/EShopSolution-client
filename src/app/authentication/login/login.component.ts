import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthenticationEndpoint } from 'sdk/api-sdk-js/src/services/authentication/endpoints/authentication-endpoint';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authenticationEndpoint: AuthenticationEndpoint | undefined;
  public form: FormGroup = Object.create(null);
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(): void {
    this.router.navigate(['/dashboards/dashboard1']);
  }
}
