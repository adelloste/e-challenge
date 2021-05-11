import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './chat/chat.component';

@NgModule({
    imports: [
        SharedModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatComponent
    ]
})
export class ChatModule { }