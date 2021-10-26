import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTypesComponent } from './views/user-types/user-types.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users Management',
    }
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
