import { Component, Injectable, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {environment} from '../../../environments/environment';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-store-products',
  template: `\`\
  <!DOCTYPE html>
<html ng-app>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<style>
#products {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#products td, #products th {
    border: 1px solid #ddd;
    padding:12px;
}

#products tr:nth-child(even){background-color: #6A5ACD;}

#products tr:hover {background-color: #483D8B;}

#products th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #483D8B	;
    color: white;
}
.btn {
    background-color: black;
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
    background-color: #6A5ACD;
}
</style>
</head>

<body>

  



<table id="products">
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Seller</th>
    <th>CreatedAt</th>
    <th>UpdatedAt</th>
    <th></th>
    <th></th>
  </tr>
  
<tr *ngFor="let item of data">
  <td>{{item.name}}</td>
  <td>{{item.price}}</td>
  <td>{{item.sellerName}}</td>
  <td>{{item.createdAt}}</td>
  <td>{{item.updatedAt}}</td>
  <td><button type="button" class="btn btn-default" (click)="editProduct(item._id)">Edit</button></td>
  <td><button type="button" class="btn btn-default" (click)="deleteProduct(item._id)">-</button></td>
  </tr>
</table>
<button type="button" style="width:10" class="btn btn-default" (click)="addProduct()">Add product</button>


</body>
</html>`
})
export class ProductsComponent {
  data =[];
  constructor(private http: HttpClient,private router: Router){}

  ngOnInit() 
  {
       this.http.get('http://localhost:3000/api/product/getProducts').
       subscribe(res =>{this.data=res["data"]});
  }

  deleteProduct(ident:string)
  {
    var config = {
                  headers : 
                  {
                      'Content-Type':'application/json'
                  }
              }
    this.http.delete('http://localhost:3000/api/product/deleteProduct/'+ident,config).
    subscribe();
    window.location.reload();
  }

  addProduct()
  {
    window.location.replace("#/store/addproduct");
  }

   editProduct(ident:string)
  {
    sessionStorage.setItem('productId',ident);
    window.location.replace("#/store/editproduct");
    
   }
}
