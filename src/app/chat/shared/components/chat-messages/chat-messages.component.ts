import { Component, Input, OnInit }           from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageManagerService } from '@Core/services/storage-manager.service';

import { Message } from '@Core/models/message';

@Component({
  selector: 'en-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  @Input() messages: Message[];

  chatForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storageManager: StorageManagerService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.chatForm = this.fb.group({
      message: [
        '',
        Validators.compose([])
      ]
    });
  }

  onMessage(msg: Message): void {
    // add message
    this.messages.push(msg);
    // get stored msgs
    let msgs: Message[] = this.storageManager.get('en-messages');
    // save message
    if(msgs) {
      msgs = msgs.concat([msg]);
    }
    else {
      msgs = [msg];
    }
    this.storageManager.store<Message[]>('en-messages', msgs);
  }

  onSearch(data: string): void { }

}
