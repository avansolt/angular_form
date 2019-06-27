import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { MasterComponent } from '../Home/CustomerApp.MasterComponent';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { MainRoutes} from "../Routing/CustomerApp.MainRouting"

@NgModule({
  declarations: [
     HomeComponent, MasterComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MainModule { }
