import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { UserState, UserStateModel } from 'src/app/state/user.state';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users!:User[];

  constructor(private store: Store,private produtsservice:ProductsService) {

    this.store.select(state => state.users.users).subscribe(
      (data)=>this.users=data
    );
   }
   
// @Select(UserState) users$:Observable<string[]>;

  ngOnInit() {

  }

}
