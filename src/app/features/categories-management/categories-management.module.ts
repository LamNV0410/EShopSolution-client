import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesManagementRoutingModule } from './categories-management-routing.module';
import { CategoriesComponent } from './views/categories/categories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesManagementRoutingModule,
    SharedModule
  ]
})
export class CategoriesManagementModule { }
