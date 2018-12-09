import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 user: User;
  constructor(){
    this.user = new User();
    this.user.name = "Rahul Kadgejar";
    this.user.designation = "Software Developer";
    this.user.address = "120 EastGate Drive";
    this.user.phone = [
      '123-456-7896',
      '456-789-1236'
    ];
  }

}
