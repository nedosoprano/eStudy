import { Component} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariables } from 'src/global-variables';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-student-task-page',
  templateUrl: './student-task-page.component.html',
  styleUrls: ['./student-task-page.component.css']
})

export class StudentTaskPageComponent{
  public response: string
  public error: string
  task: Task

  constructor(private route: ActivatedRoute, private http: HttpClient){ 
    this.route.params.subscribe((params: Params) => {
      let id = params['moduleId'];
      this.task = GlobalVariables.selectedCourse.modules.filter(module => module.id === id)[0].task;
    });
  }

  onClick(rawCode: string){
    var code = "\"" + rawCode.replace(/"/g, `\\"`).replace(/\n/g, '') + "\""
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post<string>('/coderun/' + GlobalVariables.selectedCourse.language, code, {headers, responseType: 'text' as 'json'}).subscribe(result => {
        this.response = result;
    }, error => this.error = "Something went wrong!");
  }
}
