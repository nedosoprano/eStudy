import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from '../app.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-course-page',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})

export class StudentCoursePageComponent implements OnInit {
  public course: Course

  constructor(private route: ActivatedRoute, private http: HttpClient){ }

  ngOnInit(): void {
    var id;

    this.route.params.subscribe((params: Params) => {
      id = params['id']
    });
    
    this.http.get<Course>('/course/' + id).subscribe(result => {
      this.course = result;
    }, error => console.error(error));
  }
}
