import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import {Detail} from '../authdata.json';
//import * as products from "../authdata.json";
//and then using them as:
//console.log(products.property)

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username : string = "";
  password : string = "";
  isUser : string = "";

  //users: detail[] = [];
  constructor(private router:Router, private form:FormsModule, private httpService:HttpClient) { }
  users: string [];
  userObj : string [];

    ngOnInit () {

    }


  registerUser(event){
    event.preventDefault();
  //  console.log(detail);

  }
}
