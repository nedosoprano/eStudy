import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/models/course';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})

export class StudentPageComponent{
  course: Course

  constructor(protected route: ActivatedRoute, protected http: HttpClient){
    let id;

    this.route.params.subscribe((params: Params) => {
      id = params['courseId']
    });
    
    this.http.get<Course>('/course/' + id).subscribe(result => {
      this.course = result;
      GlobalVariables.selectedCourse = result;
    }, error => console.error(error));
  }
}
