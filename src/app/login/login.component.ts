import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    username : string = "";
    password : string = "";
    showNav;

  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
      this.showNav = true;

  }

  loginUser(event){
    event.preventDefault();
    if(this.username != "" && this.password != ""){
      if(typeof(Storage) != "undefined"){
        console.log("storage ready");
        //name = this.username;
        //console.log(this.username);
        sessionStorage.setItem("username", this.username);
        //console.log(sessionStorage.getItem("username"));
      } else {
      //  alert("sessionStorage not available");
      }
      this.router.navigateByUrl('/chat');
    } else {
      alert("Username and password were incorrect");
    }
  }
/*
  loginUser(event){
    event.preventDefault();
    if(typeof(Storage) != "undefined"){
      console.log("storage ready");
      //name = this.username;
      sessionStorage.setItem("username", this.username);
      console.log(sessionStorage.getItem("username"));
    } else {
      alert("sessionStorage not available");
    }
  }*/
}
