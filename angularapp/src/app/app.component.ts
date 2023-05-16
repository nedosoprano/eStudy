import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
}

export interface EntityBase {
  id: string,
  title: string;
  description: string;
}

export interface Course extends EntityBase {
  modules: Set<Module>
}

export interface Module extends EntityBase {
  tasks: Set<Task>
}

export interface Task extends EntityBase {
  
}
