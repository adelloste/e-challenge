import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators }      from '@angular/forms';

import { Message } from '@Core/models/message';

@Component({
  selector: 'en-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  @Output() onMessage = new EventEmitter<Message>();
  
  chatForm: FormGroup;

  constructor(
    private fb: FormBuilder
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
    if(this.chatForm.value.message && this.chatForm.value.message !== '') {
      // create message
      let msg: Message = {
        id: '1',
        image: './assets/imgs/avatar-2.jpg',
        name: 'Alessandro',
        surname: 'Dell\'Oste',
        nickname: 'adelloste',
        date: Date.now(),
        message: this.chatForm.value.message
      }
      // add message
      this.onMessage.emit(msg);
      // reset form
      this.chatForm.reset();
    }
  }

}
