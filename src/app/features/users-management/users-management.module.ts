import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UsersComponent } from './views/users/users.component';
import { UserTypesComponent } from './views/user-types/user-types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateUserComponent } from './views/create-user/create-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserTypesComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    SharedModule
  ]
})
export class UsersManagementModule { }
