import { Component, Input} from '@angular/core';
import { GlobalVariables } from 'src/global-variables';
import { Course } from '../models/course';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {
  @Input() public course: Course
  @Input() public userRole: string
}
