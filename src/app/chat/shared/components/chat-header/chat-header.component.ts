import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'en-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void { }

  search(): void {
    this.onSearch.emit('');
  }

}
