import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxsOnInit, Store } from '@ngxs/store';
import { AddUser } from './actions/user.action';


@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  constructor(private http:HttpClient,private store:Store) { 
    
    
  }
  

  addProduct(){
    // this.http.get('https://gorest.co.in/public/v1/users').subscribe(
    //   (data:any)=>{
    //    data.data.map(
    //      (data:any)=>{
    //        this.store.dispatch(new AddUser({name:data.name,email:data.email}));
    //      }
        
    //    )
      

        
    //   }
    // )
    
    
    
    
    }
}
