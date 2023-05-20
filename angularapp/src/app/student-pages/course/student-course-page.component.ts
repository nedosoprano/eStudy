import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Course, Module} from '../../app.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-course-page',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})

export class StudentCoursePageComponent{
  public course: Course

  constructor(protected route: ActivatedRoute, protected http: HttpClient){ 
    let id;

    this.route.params.subscribe((params: Params) => {
      id = params['courseId']
    });
    
    this.http.get<Course>('/course/' + id).subscribe(result => {
      this.course = result;
    }, error => console.error(error));
  }
}
