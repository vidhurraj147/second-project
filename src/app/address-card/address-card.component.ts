import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
 // title = 'second-project';
 user: any; 
 @Input('name') userName: string;

  constructor() {
   }

  ngOnInit() {
    this.user = {
      // name: 'Foo Bar',
      name: this.userName,
      title: 'Software Dev',
      address: '123 Main st, city, state 10000',
      phone: [
        '123-456-7896',
        '456-456-7899',
        '456-789-1234'
      ],
      phone2: [
        // '123-456-7896',
        // '456-456-7899',
        // '456-789-1234'
      ]
    };
  }

}
