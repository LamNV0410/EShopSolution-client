import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserTypeEndpoint } from 'sdk/api-sdk-js/src/services/systems/user-types/endpoints/user-type-endpoint';
import { UsersEndpoint } from 'sdk/api-sdk-js/src/services/systems/users/endpoints/users-endpoint';
import { User } from 'sdk/api-sdk-js/src/services/systems/users/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  files: File[] = [];
  usersEnpoint!: UsersEndpoint;
  userTypeEndpoint!: UserTypeEndpoint;
  id: string = '';
  user!: User;
  constructor(
    private formbuilder: FormBuilder,
    private _router: ActivatedRoute
  ) {

  }
  userInfor = this.formbuilder.group({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    typeRole: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
  });

  get firstName() { return this.userInfor.controls['firstName'] };
  get lastName() { return this.userInfor.controls['lastName'] };
  get userName() { return this.userInfor.controls['userName'] };
  get password() { return this.userInfor.controls['password'] };
  get address() { return this.userInfor.controls['firstNaaddressme'] };
  get email() { return this.userInfor.controls['email'] };
  get phoneNumber() { return this.userInfor.controls['phoneNumber'] };
  get gender() { return this.userInfor.controls['gender'] };
  get typeRoleId() { return this.userInfor.controls['typeRole'] };

  ngOnInit(): void {
    this.generateEndpoint();
    this.getParams();
    this.intitialValues();
  }

  ngAfterViewInit() {
    this.renderViews();
  }

  onSubmit() {
    if (this.userInfor.valid) {
      let user: User = {
        userName: this.userName.value,
        password: this.password.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        typeRoleId: this.typeRoleId.value,
        typeRole: this.typeRoleId.value
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

  private intitialValues() {
    this.usersEnpoint
      .getById(this.id)
      .then(res => {
        if (res) {
          this.user = res;
        }
      })
      .catch(error => {
        // TODO : Not found
        return;
      });
  }

  private renderViews() {
    this.userInfor.setValue(this.user);
  }
  private generateEndpoint() {
    this.usersEnpoint = new UsersEndpoint();
    this.userTypeEndpoint = new UserTypeEndpoint();
  }
  private getParams() {
    this.id = this._router.snapshot.paramMap.get('id') ?? '';
  }
}
