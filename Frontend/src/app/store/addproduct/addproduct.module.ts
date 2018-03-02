import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AddproductRoutingModule } from './addproduct-routing.module';

import { AddproductComponent } from './addproduct.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [ThemeModule, AddproductRoutingModule,FormsModule,ReactiveFormsModule],
  declarations: [AddproductComponent],
  providers: []
})

export class AddproductModule {}
