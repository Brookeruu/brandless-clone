import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent{

  public user;
// private user;

  constructor() { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

}
