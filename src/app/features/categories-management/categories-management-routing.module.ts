import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './views/categories/categories.component';

const routes: Routes = [
  {
    path: 'categories',
    redirectTo: ''
  },
  {
    path: '',
    component: CategoriesComponent,
    data: {
      title: 'Categories Management',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesManagementRoutingModule { }
