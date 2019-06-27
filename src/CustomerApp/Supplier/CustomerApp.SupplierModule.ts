import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRouting } from '../Routing/CustomerApp.SupplierRouting';


@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(SupplierRouting)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
