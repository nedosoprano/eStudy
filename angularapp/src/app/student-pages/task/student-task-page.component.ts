import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentModulePageComponent } from '../module/student-module-page.component';

@Component({
  selector: 'app-student-task-page',
  templateUrl: './student-task-page.component.html',
  styleUrls: ['./student-task-page.component.css']
})

export class StudentTaskPageComponent extends StudentModulePageComponent{
  constructor(protected override route: ActivatedRoute, protected override http: HttpClient){ 
    super(route, http);
  }
}
