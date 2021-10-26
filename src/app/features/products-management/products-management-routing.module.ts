import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: 'Products Management',
    }
  },
  {
    path: 'products',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsManagementRoutingModule { }
