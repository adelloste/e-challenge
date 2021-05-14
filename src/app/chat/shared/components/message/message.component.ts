import { Component, Input, OnInit } from '@angular/core';

import { Message } from '@Core/models/message';

@Component({
  selector: 'en-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  currentUser: string = 'adelloste';

  constructor() { }

  ngOnInit(): void { }

}
