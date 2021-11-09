import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagementComponent } from './users-management.component';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { UserTypesComponent } from './views/user-types/user-types.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UsersManagementComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
        data: {
          title: 'Users Management',
        }
      },
      {
        path: 'create',
        component: CreateUserComponent,
        data: {
          title: 'Create user',
        }
      },
      {
        path: ':id/edit',
        component: EditUserComponent,
        data: {
          title: 'Edit user',
        }
      }
    ]
  },
  {
    path: 'user-types',
    component: UserTypesComponent,
    data: {
      title: 'User Types Management',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
