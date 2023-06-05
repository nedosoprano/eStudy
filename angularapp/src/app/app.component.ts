import { HttpStatusCode } from '@angular/common/http';
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
    GlobalVariables.language = 'UA'
    console.log(GlobalVariables.language)
  }

  onUAClick(){
    GlobalVariables.language = 'UA'
  }
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
  role: string
}

export interface SignInResponce {
  statusCode: HttpStatusCode
  user: User
}

export interface Message{
  userName: string
  text: string
}
