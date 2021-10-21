import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUser } from 'src/app/actions/user.action';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm!: FormGroup;

  constructor(private fb: FormBuilder,private store:Store,private productsService:ProductsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
   });
  }

  addUser(email:string,password:any) {
    console.log(email,password);
    this.store.dispatch(new AddUser({email:email,password:password}));
  }
  using:string='vani';
  


  ngOnInit() {
    console.log(`my name is ${this.using}`);
    this.productsService.addProduct();
  }

}