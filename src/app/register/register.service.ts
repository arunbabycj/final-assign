//import {injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IEmployee } from './employee';
import { Observable } from 'rxjs';

export interface user{
  username:string;
  success:string;
}

//@Injectable({providedln:'root'})

export class RegisterService {

  private _url: string = "/assets/authdata.json";

  constructor(private http:HttpClient) {

  }

  login(username:string,password:string){
    return this.http.post<user>('/api/auth',{username:username, password:password});
  }
  // getEmployees(): Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this._url);
  // }
}
