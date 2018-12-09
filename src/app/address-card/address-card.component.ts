import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
 // title = 'second-project';
 // user: any; 
 @Input('user') user: User;

  constructor() {
   }

  ngOnInit() {
    // this.user = {
    //   // name: 'Foo Bar',
    //   name: this.userObj.name,
    //   title: this.userObj.designation,
    //   address: this.userObj.address,
    //   phone: this.userObj.phone,
    //   phone2: [
    //     // '123-456-7896',
    //     // '456-456-7899',
    //     // '456-789-1234'
    //   ]
    // };
  }

}
