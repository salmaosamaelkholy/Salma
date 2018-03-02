import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EditproductRoutingModule } from './editproduct-routing.module';

import { EditproductComponent } from './editproduct.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [ThemeModule, EditproductRoutingModule,FormsModule,ReactiveFormsModule],
  declarations: [EditproductComponent],
  providers: []
})

export class EditproductModule {}
