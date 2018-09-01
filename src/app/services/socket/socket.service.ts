import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = "http://localhost:3000";
  private socket;
  constructor() { }
  sendMessage(message){
    this.socket.emit('add-message', message);
  }
  getMessages(){
    let obmessages = new Observable(
      //'observer' is a javascript object that defines the handlers for the
      //notifications that we will receive
      observer => {
      this.socket = io();
      //listen for 'new-message'event from the Server
      this.socket.on('message',(data)=> {observer.next(data);});

      //when the observer ends (unsubscribe) then disconnet the Socket
      return ()=>{this.socket.disconnect();}
    })
    return obmessages;
  }

}
