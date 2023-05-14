import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './main-page/course-card/course-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentCoursePageComponent } from './student-pages/student-course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    MainPageComponent,
    StudentCoursePageComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
