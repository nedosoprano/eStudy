import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eStudy';
}

export interface EntityBase {
  id: string,
  title: string;
  description: string;
}

export interface Course extends EntityBase {
  language: string
  modules: Module[]
}

export interface Module extends EntityBase {
  task: Task
}

export interface Task extends EntityBase {
  
}

export interface User {
  email: string
  name: string
  password: string
}

export interface SignInResponce {
  statusCode: HttpStatusCode
  role: string
}

export interface Message{
  userName: string
  text: string
}
