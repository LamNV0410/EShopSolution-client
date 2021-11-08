import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersEndpoint } from 'sdk/api-sdk-js/src/services/systems/users/endpoints/users-endpoint';
import { User } from 'sdk/api-sdk-js/src/services/systems/users/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  files: File[] = [];
  usersEnpoint!: UsersEndpoint
  constructor(
    private formbuilder: FormBuilder
  ) {

  }
  createUser = this.formbuilder.group({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    role: new FormControl('', [Validators.required]),
  });

  get firstName() { return this.createUser.controls['firstName'] };
  get lastName() { return this.createUser.controls['lastName'] };
  get userName() { return this.createUser.controls['userName'] };
  get password() { return this.createUser.controls['password'] };
  get address() { return this.createUser.controls['firstNaaddressme'] };
  get email() { return this.createUser.controls['email'] };
  get phoneNumber() { return this.createUser.controls['phoneNumber'] };
  get gender() { return this.createUser.controls['gender'] };
  get role() { return this.createUser.controls['role'] };

  ngOnInit(): void {
    this.generateEndpoint();
  }
  onSubmit() {
    if (this.createUser.valid) {
      let user: User = {
        userName: this.userName.value,
        password: this.password.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        role: this.role.value
      }
      this.usersEnpoint
        .create(user)
        .then(res => {
          console.log("create user", res);
        });
    }
  }

  public onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  public onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  private generateEndpoint() {
    this.usersEnpoint = new UsersEndpoint();
  }
}
