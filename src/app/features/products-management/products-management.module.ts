import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsManagementRoutingModule } from './products-management-routing.module';
import { ProductsComponent } from './views/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsManagementRoutingModule,
    SharedModule
  ]
})
export class ProductsManagementModule { }
