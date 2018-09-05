//import {injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IEmployee } from './employee';
import { Observable } from 'rxjs';

//@Injectable()

export class RegisterService {

  private _url: string = "/assets/authdata.json";

  constructor(private http:HttpClient) {

  }

  // getEmployees(): Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this._url);
  // }
}
