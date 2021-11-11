import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserTypeEndpoint } from 'sdk/api-sdk-js/src/services/systems/user-types/endpoints/user-type-endpoint';
import { UserType } from 'sdk/api-sdk-js/src/services/systems/user-types/models/user-type';
import { UserTypeRole } from 'sdk/api-sdk-js/src/services/systems/user-types/models/user-type-role';
import { SNACKBAR_HORIZALPOSITION, SNACKBAR_VERTICALPOSITION } from 'src/app/features/common-const/eshop-common';
import { EShopMessageCommon } from 'src/app/features/common-const/eshop-messages-common-const';

@Component({
  selector: 'app-edit-usertype-dialog',
  templateUrl: './edit-usertype-dialog.component.html',
  styleUrls: ['./edit-usertype-dialog.component.scss']
})
export class EditUsertypeDialogComponent implements OnInit {

  messageRequired: string = EShopMessageCommon.MESSAGE_REQUIRED;
  userTypeEndpoint!: UserTypeEndpoint;
  id: string = '';
  userTypeInfor = this.formBuilder.group({
    userTypeName: new FormControl('', Validators.compose([Validators.required])),
    userTypeRoleId: new FormControl('', Validators.compose([Validators.required])),
  })

  get userTypeName() { return this.userTypeInfor.get('userTypeName') };
  get userTypeRoleId() { return this.userTypeInfor.get('userTypeRoleId') };
  userTyperRoles: UserTypeRole[] = []
  constructor(
    public dialogRef: MatDialogRef<EditUsertypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { this.dialogRef.disableClose = true }

  ngOnInit() {
    this.getParams();
    this.genrerateEndpoint();
    this.getData();
  }
  onSubmit() {
    if (this.userTypeInfor.valid) {
      let usertype: UserType = { typeName: this.userTypeName?.value, userTypeRoleId: this.userTypeRoleId?.value }
      this.userTypeEndpoint
        .update(this.id, usertype)
        .then(res => {
          if (res) {
            this._snackBar.open(EShopMessageCommon.MESSAGE_SUCCESS_CREATED, EShopMessageCommon.MESSAGE_BUTTON_CONFIRM, {
              horizontalPosition: SNACKBAR_HORIZALPOSITION,
              verticalPosition: SNACKBAR_VERTICALPOSITION,
              duration: 3000
            });
            this.dialogRef.close(true);
          } else {
            this._snackBar.open(EShopMessageCommon.MESSAGE_SUCCESS_CREATE_FAILED, EShopMessageCommon.MESSAGE_BUTTON_CONFIRM, {
              horizontalPosition: SNACKBAR_HORIZALPOSITION,
              verticalPosition: SNACKBAR_VERTICALPOSITION,
              duration: 3000
            });
          }
        })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  private genrerateEndpoint() {
    this.userTypeEndpoint = new UserTypeEndpoint();
  }
  private getParams() {
    this.id = this.data.id ?? '';
  }
  private getData() {
    this.userTypeEndpoint
      .getAllUserTypeRolesSelect('')
      .then(res => {
        this.userTyperRoles = res;
      });

    this.userTypeEndpoint.getById(this.id).then(res => {
      this.userTypeInfor.get('userTypeName')?.setValue(res.typeName);
      this.userTypeInfor.get('userTypeRoleId')?.setValue(res.userTypeRoleId)
    })
  }
}
