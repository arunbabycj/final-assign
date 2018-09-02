import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
//import {Detail} from '../authdata.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username : string = "";
  password : string = "";
  //users: detail[] = [];
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }


  registerUser(event){
    event.preventDefault();
  //  console.log(detail);
    if(this.username != "" && this.password != ""){
      //users.name = this.username;
      //users.password = this.password;
      if(typeof(Storage) != "undefined"){
        console.log("storage ready");
        //name = this.username;
        //console.log(this.username);
        sessionStorage.setItem("username", this.username);
        //console.log(sessionStorage.getItem("username"));
      } else {
      //  alert("sessionStorage not available");
      }
      this.router.navigateByUrl('/login');
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
