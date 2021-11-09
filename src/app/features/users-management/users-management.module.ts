import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UsersComponent } from './views/users/users.component';
import { UserTypesComponent } from './views/user-types/user-types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersManagementComponent } from './users-management.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { EditUserTypeComponent } from './views/edit-user-type/edit-user-type.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserTypesComponent,
    CreateUserComponent,
    UsersManagementComponent,
    EditUserComponent,
    EditUserTypeComponent,
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    SharedModule
  ]
})
export class UsersManagementModule { }
