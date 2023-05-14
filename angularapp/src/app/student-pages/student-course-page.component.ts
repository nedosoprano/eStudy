import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from '../main-page/main-page.component';

@Component({
  selector: 'app-student-course-page',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})
export class StudentCoursePageComponent {
  public course: Course = {
    id: 1,
    title: "Course",
    summary: "Course summary Course summary Course summary Course summary Course summary Course summary Course summary Course summary Course summary Course summary Course summary Course summary Course summary"
  }
}
