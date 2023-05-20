import { Component} from '@angular/core';
import { Course, Module } from '../../app.component';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentCoursePageComponent } from '../course/student-course-page.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-module-page',
  templateUrl: './student-module-page.component.html',
  styleUrls: ['./student-module-page.component.css']
})

export class StudentModulePageComponent extends StudentCoursePageComponent{
  public module: Module

  constructor(protected override route: ActivatedRoute, protected override http: HttpClient){ 
    super(route, http);
    let id;

    this.route.params.subscribe((params: Params) => {
      id = params['moduleId']
    });

    this.http.get<Module>('/course/module/' + id).subscribe(result => {
      this.module = result;
    }, error => console.error(error));
  }
}
