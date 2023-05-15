import { Component, Input} from '@angular/core';
import { Module } from '../../app.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {
  @Input() public modules: Set<Module>
}
