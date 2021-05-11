import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './chat/chat.component';

import { ChatService } from './services/chat.service';

@NgModule({
    imports: [
        SharedModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatComponent
    ],
    providers: [
        ChatService
    ]
})
export class ChatModule { }