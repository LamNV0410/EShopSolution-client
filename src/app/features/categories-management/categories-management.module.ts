import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesManagementRoutingModule } from './categories-management-routing.module';
import { CategoriesComponent } from './views/categories/categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCategoryDialogComponent } from './components/add-category-dialog/add-category-dialog.component';
import { FormModule } from 'src/app/forms/forms.module';
import { EditCategoryDialogComponent } from './components/edit-category-dialog/edit-category-dialog.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoryDialogComponent,
    EditCategoryDialogComponent
  ],
  imports: [
    CommonModule,
    CategoriesManagementRoutingModule,
    SharedModule
  ]
})
export class CategoriesManagementModule { }
