import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './main-page/course-card/course-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentCoursePageComponent } from './student-pages/course/student-course-page.component';
import { SideMenuComponent } from './student-pages/menu/side-menu.component';
import { ChatComponent } from './chat/chat.component';
import { StudentModulePageComponent } from './student-pages/module/student-module-page.component';
import { StudentTaskPageComponent } from './student-pages/task/student-task-page.component';
import { LogInPageComponent } from './identity/login/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './identity/signup/signup-page.component';
import { NotFoundPageComponent } from './notfound/notfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    MainPageComponent,
    StudentCoursePageComponent,
    SideMenuComponent,
    ChatComponent,
    StudentModulePageComponent,
    StudentTaskPageComponent,
    LogInPageComponent,
    SignUpPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
