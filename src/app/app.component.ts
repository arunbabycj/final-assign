import { Component,OnInit } from '@angular/core';
import {SocketService} from './services/socket/socket.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient, private _chatService:SocketService) { }
  users: string [];

  ngOnInit () {
    this.httpService.get('./assets/authdata.json').subscribe(
      data => {
        this.users = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
