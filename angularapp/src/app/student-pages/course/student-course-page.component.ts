import { Component, OnInit} from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/services/course.service';
@Component({
  selector: 'app-student-course-page',
  templateUrl: './student-course-page.component.html'
})

export class StudentCoursePageComponent implements OnInit{
  public course: Course

  constructor(private courseService: CourseService){
  }

  async ngOnInit() {
    this.course = await this.courseService.getSelectedCourse();
  }
}
