import { Component, OnInit } from '@angular/core';

import { ChatService } from '../shared/services/chat.service';

import { Message } from '@Core/models/message';

@Component({
  selector: 'en-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[];

  constructor(
    private chat: ChatService
  ) { }

  ngOnInit(): void {
    this.chat.getMessages().subscribe(
      (data: Message[]) => {
        this.messages = data;
      }
    );
  }

}
