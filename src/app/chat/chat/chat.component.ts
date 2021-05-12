import { Component, OnInit } from '@angular/core';

import { ChatService }           from '../shared/services/chat.service';
import { StorageManagerService } from '@Core/services/storage-manager.service';

import { Message } from '@Core/models/message';

@Component({
  selector: 'en-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[];

  constructor(
    private chat: ChatService,
    private storageManager: StorageManagerService
  ) { }

  ngOnInit(): void {
    this.chat.getMessages().subscribe(
      (data: Message[]) => {
        // get stored msgs
        let msgs: Message[] = this.storageManager.get('en-messages');
        // merge messags
        if(msgs) {
          this.messages = data.concat(msgs);
        }
        else {
          this.messages = data;
        }
      }
    );
  }

}
