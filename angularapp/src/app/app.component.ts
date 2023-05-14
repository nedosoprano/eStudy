import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public courses?: Course[];

  constructor(http: HttpClient) {
    http.get<Course[]>('/course').subscribe(result => {
      this.courses = result;
    }, error => console.error(error));
  }

  title = 'angularapp';
}

interface Course {
  title: string;
  summary: string;
}
