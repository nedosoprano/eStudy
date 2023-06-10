import { Component, Input} from '@angular/core';
import { Course } from '../app.component';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {
  @Input() public course: Course
  @Input() public userRole: string

  get isEnglish(): boolean {
    return GlobalVariables.language == 'EN';
  }
}
