import { Component, Injector } from '@angular/core'
import { Customer } from './CustomerApp.model'
import {HttpClient} from "@angular/common/http"

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Disable:boolean = false;
  constructor(_injector:Injector, public http: HttpClient){

  }

  PosttoServer(){
    //http://localhost:3000/Customers
    var custdto: any = {};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.Disable = true;
    this.http.post("http://localhost:3000/Customers",
     custdto).subscribe(res=>this.Success(res),
     res=> this.Error(res));
  }
   GetFromServer(){
    
    this.http.get("http://localhost:3000/Customers"
    ).subscribe(res=>this.SuccessGet(res),
     res=> this.Error(res));
  }
  Error(res){
     console.debug(res);
  }
  Success(res){
    this.GetFromServer();
  }
SuccessGet(res){
    this.CustomerModels = res;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }
  SelectCustomer(_selected:Customer){
    this.CustomerModel = _selected;
  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(typeofvalidator:string, controlname:string) : boolean{
    return this.CustomerModel
                .formCustomerGroup
                .controls[controlname]
                .hasError(typeofvalidator);
  }


}
