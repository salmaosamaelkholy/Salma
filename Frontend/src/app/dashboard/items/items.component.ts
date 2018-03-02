import { Component, Injectable, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {environment} from '../../../environments/environment';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";



@Component({
  selector: 'app-dashboard-items',
  template: `\
  ` 
})
export class ItemsComponent implements OnInit
{
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

//   addProduct()
//   {
//     var info = 
//     JSON.stringify({name:document.getElementById("productName").value,
//                   price:document.getElementById("myText").productPrice})

//         var config = 
//      {
//             headers : 
//             {
//                 'Content-Type': 'application/json'
//             }
//         }
//         this.http.post(environment.apiUrl+'/product/createProduct',info, config)
//         .subscribe((info:any) => {console.log(info);});
//     window.location.reload();
// }





  


  // editProduct(ident:string)
  // {
  //   this.http.patch('http://localhost:3000/api/product/updateProduct/ident').
  //   subscribe();
  //   window.location.reload();
  // }
}
