import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editproduct',
  template: `\

  <div class="col-md col-md-offset-2">
  <form [formGroup]="myForm" class="container" #userForm="ngForm" (ngSubmit) = "onSubmit(userForm.value)">
          <div class="form-group">
              <div>
                  <label for="uname">Name :</label>
                  <input type="text" id="uname" class="form-control"
                         formControlName="NameField" ngModel></div>

              
              <div>
                  <label for="fname">Price</label>
                  <input type="number" id="fname" class="form-control"
                         min="0" formControlName="PriceField" ngModel></div>

              <div>
                  <label for="lname">Seller Name</label>
                  <input type="text" id="lname" class="form-control"
                         formControlName="sellerNameField" ngModel>
              </div>

              <div>
                  <label for="lname">Creation date</label>
                  <input type="date" id="lname" class="form-control"
                         formControlName="createdAtField" ngModel>
              </div>
          </div>
          <button class="btn btn-primary" [disabled]="!myForm.valid" type="submit">Add Product</button>
      </form>
  </div>
  `
})
export class EditproductComponent {


    data=[];
    myForm: FormGroup;

    constructor(private http: HttpClient,private router: Router){}

    onSubmit(user){

        


        var data = JSON.stringify
({name:user.NameField,
    price:user.PriceField,
    sellerName:user.sellerNameField,
    createdAt:user.createdAtField,
})

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }

        
        this.http.get('http://localhost:3000/api/product/getProduct/'+id,config).
        subscribe(res =>{this.data=res["data"]});

      
    var id=sessionStorage.getItem('productId');
    this.http.patch(environment.apiUrl+'/product/updateProduct/'+id,data, config)
    .subscribe((info:any) => {console.log(info);});


       

       window.location.replace("#/store/products");
       sessionStorage.clear;
}

ngOnInit() 
{
       
    this.myForm = new FormGroup({
        NameField: new FormControl(null, Validators.required),
        PriceField: new FormControl(null, Validators.required),
        sellerNameField: new FormControl(null, Validators.required),
        createdAtField: new FormControl(null, Validators.required)


    });
}}