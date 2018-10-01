import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/socket/socket.service';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[SocketService]
})

export class ChatComponent implements OnInit {
  username:string;
  messages = [];
  message;
  connection;
  connection1;
  connection2;
  connection3;
  user:string;
  room:string;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];
  showNav;
  updateForm: FormGroup;

  constructor(private sockServ: SocketService,
              private router:Router,
              private route: ActivatedRoute,
              private issueService: IssueService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
        this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      group: '',
      chathistory: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.updateForm.get('name').getValue(session.username);
      this.updateForm.get('group').getValue(session.group);
    });


      this.connection = this.sockServ.getMessages().subscribe(message =>{
        //message is a value of input field
          this.messages.push(message);
          this.message = " ";
      });

      this.connection1 = this.sockServ.newUserJoined().subscribe(data =>{
          this.messageArray.push(data);
      });

      this.connection2 = this.sockServ.userLeftRoom().subscribe(data =>{
          this.messageArray.push(data);
      });

      this.connection3 = this.sockServ.newMessageReceived().subscribe(data =>{
          this.messageArray.push(data);
      });

  }

  sendMessages(){
    //send a chat message to the server.
    this.sockServ.sendMessages(this.message + '('+this.username+')');
    this.message = "";
  }

  ngOnDestroy() {
    //when leaving this component close down the subscription
    if(this.connection){
      this.connection.unsubscribe();
    }
  }

  logout(){
    //logout the user and go back to login page
    localStorage.clear();
    console.log("session cleared");
    this.router.navigateByUrl('login');
  }


  join(){
        this.sockServ.joinRoom({user:this.user, room:this.room});
  }

  leave(){
        this.sockServ.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage(){
        this.sockServ.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }
}
