import { Component } from '@angular/core';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eStudy';

  onENClick(){
    GlobalVariables.language = 'EN'
  }

  onUAClick(){
    GlobalVariables.language = 'UA'
  }
}