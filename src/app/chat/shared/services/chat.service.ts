import { Injectable } from '@angular/core';

import { Message } from '@Core/models/message';

import { Observable } from 'rxjs';

import { environment } from '@Environments/environment';
import { ApiService } from '@Core/services/api.service';

@Injectable()
export class ChatService {

    constructor(
        private api: ApiService
    ) { }

    getMessages(): Observable<Message[]> {
        return this.api.request<Message[]>('GET', environment.api.baseUrl + environment.api.message.uri);
    }

}