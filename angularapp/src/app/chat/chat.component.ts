import { Component} from '@angular/core';
import { GlobalVariables } from 'src/global-variables';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  messages: Message[] = GlobalVariables.messages;
  newMessage: string

  onClick(){
    this.messages.push({
      userName: GlobalVariables.appUser.name,
      text: this.newMessage
    })
    this.newMessage = ''
  }
}
