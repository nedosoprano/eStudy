import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentModulePageComponent } from '../module/student-module-page.component';

@Component({
  selector: 'app-student-task-page',
  templateUrl: './student-task-page.component.html',
  styleUrls: ['./student-task-page.component.css']
})

export class StudentTaskPageComponent extends StudentModulePageComponent{
  public response: string
  public error: string

  constructor(protected override route: ActivatedRoute, protected override http: HttpClient){ 
    super(route, http);
  }

  onClick(rawCode: string){
    var code = "\"" + rawCode.replace(/"/g, `\\"`).replace(/\n/g, '') + "\""
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post<string>('/coderun/' + this.course.language, code, {headers, responseType: 'text' as 'json'}).subscribe(result => {
        this.response = result;
    }, error => this.error = "Something went wrong!");
  }
}
