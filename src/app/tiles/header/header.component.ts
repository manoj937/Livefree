import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profilePicture : string = "assets/mano.jpg";
  userName : string = "User";
  email : string = "user@mail.com";

  @Output() navToggle = new EventEmitter<boolean>();

  constructor() { }

  navOpen() {
    this.navToggle.emit(true);
  }

  ngOnInit(){
  }

}
