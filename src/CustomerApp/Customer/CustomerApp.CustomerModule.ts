
import { NgModule } from '@angular/core';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { CustomerRouting } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
