import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'addproduct',
        loadChildren: './addproduct/addproduct.module#AddproductModule'
      },
      {
        path: 'editproduct',
        loadChildren: './editproduct/editproduct.module#EditproductModule'
      },
      
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoreRoutingModule {}
