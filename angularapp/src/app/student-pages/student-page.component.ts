import { Component, OnInit} from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})

export class StudentPageComponent implements OnInit{
  course: Course

  constructor(private courseService: CourseService){ 
  }

  async ngOnInit() {
    this.course = await this.courseService.getSelectedCourse();
  }  
}
