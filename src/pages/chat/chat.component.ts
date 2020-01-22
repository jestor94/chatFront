import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChatService } from '../../app/services/chat.services';


@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"
]
})
export class ChatComponent  {

    message: string;
    messages: string[] = [];

  constructor(private router: Router,
              private chatService: ChatService,
              ){
  
  }

  public ngOnInit(): void {
      console.log('Observer')

    this.chatService
      .getMessages()
      .subscribe((message: string) => {
          console.log('subscribe?')
        this.messages.push(message);
      });

  }

  sendMessage() {

    this.chatService.sendMessage(this.message);
    this.message = '';

  }





}



