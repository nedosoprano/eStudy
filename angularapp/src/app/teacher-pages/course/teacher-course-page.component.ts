import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-teacher-course-page',
  templateUrl: './teacher-course-page.component.html',
  styleUrls: ['./teacher-course-page.component.css']
})

export class TeacherCoursePageComponent{
  public course: Course

  constructor(protected router: ActivatedRoute, protected http: HttpClient, protected navigator: Router){
    let id;

    this.router.params.subscribe((params: Params) => {
      id = params['courseId']
    });
    
    this.http.get<Course>('/course/' + id).subscribe(result => {
      this.course = result;
    }, error => console.error(error));
  }

  onEditClick(){
    this.navigator.navigate(['/course/teacher/' + this.course.id + '/edit/'])
  }
}
