import { Component} from '@angular/core';
import { GlobalVariables } from 'src/global-variables';
import { Course } from 'src/app/models/course';
@Component({
  selector: 'app-student-course-page',
  templateUrl: './student-course-page.component.html'
})

export class StudentCoursePageComponent{
  get getCourse(): Course {
    return GlobalVariables.selectedCourse;
  }
}
