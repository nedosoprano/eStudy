import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from '../app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public courses?: Course[];

  constructor(http: HttpClient) {
    http.get<Course[]>('/course').subscribe(result => {
      this.courses = result;
    }, error => console.error(error));
  }

  title = 'Courses';
}
