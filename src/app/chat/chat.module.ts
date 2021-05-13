import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent }         from './chat/chat.component';
import { ChatInputComponent }    from './shared/components/chat-input/chat-input.component';
import { ChatMessagesComponent } from './shared/components/chat-messages/chat-messages.component';
import { MessageComponent }      from './shared/components/message/message.component';

import { ChatService } from './shared/services/chat.service';

@NgModule({
    imports: [
        SharedModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatComponent,
        ChatMessagesComponent,
        ChatInputComponent,
        MessageComponent
    ],
    providers: [
        ChatService
    ]
})
export class ChatModule { }