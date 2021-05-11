import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';

const CHAT_ROUTES: Routes = [
  { 
    path: '',
    component: ChatComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CHAT_ROUTES)
  ]
})
export class ChatRoutingModule { }