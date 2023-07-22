import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/models/task';
import { CourseService } from 'src/services/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-student-task-page',
  templateUrl: './student-task-page.component.html',
  styleUrls: ['./student-task-page.component.css']
})

export class StudentTaskPageComponent implements OnInit{
  public response: string
  public error: string
  course: Course
  task: Task

  constructor(private route: ActivatedRoute, private http: HttpClient, private courseService: CourseService){ 
  }

  async ngOnInit() {
    this.course = await this.courseService.getSelectedCourse();

    this.route.params.subscribe((params: Params) => {
      let id = params['moduleId'];
      this.task = this.course.modules.filter(module => module.id === id)[0].task;
    });
  }

  onClick(rawCode: string){
    var code = "\"" + rawCode.replace(/"/g, `\\"`).replace(/\n/g, '') + "\""
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post<string>('/coderun/' + this.course.language, code, {headers, responseType: 'text' as 'json'}).subscribe(result => {
        this.response = result;
    }, error => this.error = "Something went wrong!");
  }
}
