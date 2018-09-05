import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username : string = "";
  password : string = "";
  isUser : string = "";


  public employees = [];
  //users: detail[] = [];
  constructor(private router:Router, private form:FormsModule, private http:HttpClient) { }
  users;
  userObj : string [];

    ngOnInit () {
    //  this._registerService.getEmployees()
    //    .subscribe(data => this.employees = data);
    }


  registerUser(event){
    event.preventDefault();


  }


}





   //  this.httpService.get('./assets/authdata.json').then(function(response){
   //
   //      $scope.myJsonObject = response.data;
   //
   //      //Your json becomes JS object here. Change it the way you want
   //      $scope.myJsonObject.push({'name':this.username});
   //
   // });

   // this.httpService.get('./assets/authdata.json').subscribe(
   // //this.httpService.get('../authdata.json').subscribe(
   //   data => {
   //     this.users = data ;	 // FILL THE ARRAY WITH DATA.
   //     //  console.log(this.arrBirds[1]);
   //     this.users.push({'name':this.username});
   //     console.log(this.users);
   //   },
   //   (err: HttpErrorResponse) => {
   //     console.log (err.message);
   //   });
   //
   //   var parameter = JSON.stringify({type:"user", username:this.username});
   //   $http.post(, parameter).
   //   success(function(data, status, headers, config) {
   //      // this callback will be called asynchronously
   //      // when the response is available
   //      console.log(data);
   //    }).
   //    error(function(data, status, headers, config) {
   //      // called asynchronously if an error occurs
   //      // or server returns response with an error status.
   //    });


    // this.httpService({
    //        method: "post",
    //        url: "./assets/authdata.json",
    //        data: this.users,
    //        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    // });

    // this.httpService.post("http://localhost:3000/api/register",this.users).subscribe (
    //   data => {
    //     console.log("done finally");
    //     data = this.users;
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   });

  //   updateFood(food) {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   let body = JSON.stringify(food);
  //   return this.http.put('/api/food/' + food_id, body, options ).map((res: Response) => res.json());
  // }

  //   this.httpService.put('./api/register', this.users).subscribe(
  //       (res: Response) => res.json());

  // app.controller('booksController',['$scope','$http',
  //   function($scope,$http) {
  //       $http.get("http://localhost:3000/register/data").success(function( data ) {
  //           $scope.book=data;
  //
  //       });
  //   }]);
