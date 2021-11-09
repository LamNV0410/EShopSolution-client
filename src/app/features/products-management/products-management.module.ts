import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsManagementRoutingModule } from './products-management-routing.module';
import { ProductsComponent } from './views/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsManagementRoutingModule,
    SharedModule
  ]
})
export class ProductsManagementModule { }
