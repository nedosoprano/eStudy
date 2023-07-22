import { Component, inject} from '@angular/core';
import { Message } from '../models/message';
import { IdentityService } from 'src/services/identity.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  identityService = inject(IdentityService);
  messages: Message[] = []
  newMessage: string

  onClick(){
    var user = this.identityService.getCurrentUser();

    this.messages.push({
      userName: user.name,
      text: this.newMessage
    })
    this.newMessage = ''
  }
}
