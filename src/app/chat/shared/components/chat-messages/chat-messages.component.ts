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

  send(): void {
    // create message
    let msg: Message = {
      id: '1',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Alessandro',
      surname: 'Dell\'Oste',
      nickname: 'adelloste',
      date: Date.now(),
      message: this.chatForm.value.message
    }
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
    // reset form
    this.chatForm.reset();
  }
}
