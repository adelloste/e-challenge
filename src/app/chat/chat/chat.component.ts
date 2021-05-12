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
        // get stored messages
        let msgs: Message[] = this.storageManager.get('en-messages');
        // merge messages
        if(msgs) {
          msgs = data.concat(msgs);
        }
        else {
          msgs = data;
        }
        // sort messages
        this.messages = msgs.sort((a, b) => a.date - b.date);
      }
    );
  }

}
