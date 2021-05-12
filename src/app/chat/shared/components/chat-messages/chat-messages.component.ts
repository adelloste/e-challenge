import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("LEEEEEEEEEE");
    console.log(this.messages);
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
    // get value
    // console.log(this.chatForm.getRawValue());
    // reset form
    this.chatForm.reset();
  }
}
