import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseCardComponent } from './main-page/course-card/course-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SideMenuComponent } from './menu/side-menu.component';
import { ChatComponent } from './chat/chat.component';
import { StudentPageComponent } from './student-pages/student-page.component';
import { StudentCoursePageComponent } from './student-pages/course/student-course-page.component';
import { StudentModulePageComponent } from './student-pages/module/student-module-page.component';
import { StudentTaskPageComponent } from './student-pages/task/student-task-page.component';
import { StudentFinalPageComponent } from './student-pages/final/student-final-page.component';
import { TeacherCoursePageComponent } from './teacher-pages/course/teacher-course-page.component';
import { TeacherEditorPageComponent } from './teacher-pages/editor/teacher-editor-page.component';
import { LogInPageComponent } from './identity/login/login-page.component';
import { SignUpPageComponent } from './identity/signup/signup-page.component';
import { NotFoundPageComponent } from './notfound/notfound-page.component';
import { CookieService } from 'ngx-cookie-service';
import { IdentityService } from 'src/services/identity.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    MainPageComponent,
    SideMenuComponent,
    ChatComponent,
    StudentPageComponent,
    StudentCoursePageComponent,
    StudentModulePageComponent,
    StudentTaskPageComponent,
    StudentFinalPageComponent,
    TeacherCoursePageComponent,
    TeacherEditorPageComponent,
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
  providers: [
    CookieService,
    IdentityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
