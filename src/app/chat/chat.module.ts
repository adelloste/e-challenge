import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent }         from './chat/chat.component';
import { ChatMessagesComponent } from './shared/components/chat-messages/chat-messages.component';

import { ChatService } from './shared/services/chat.service';

@NgModule({
    imports: [
        SharedModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatComponent,
        ChatMessagesComponent
    ],
    providers: [
        ChatService
    ]
})
export class ChatModule { }