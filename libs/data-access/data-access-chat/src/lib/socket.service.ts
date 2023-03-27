import { Injectable } from '@angular/core';
import { tokenGetter } from '@chat-client/models';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketService extends Socket {
  constructor() {
    super({
      url: 'http://localhost:3000',
      options: {
        extraHeaders: {
          Authorization: tokenGetter()
        }
      }
    });
  }
}
