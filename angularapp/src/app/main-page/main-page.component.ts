import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public courses?: Course[];
  public userRole: string;

  constructor(http: HttpClient, router: Router) {
    var slashIndex = router.url.lastIndexOf("/")
    this.userRole = router.url.substring(slashIndex + 1, router.url.length)

    http.get<Course[]>('/course').subscribe(result => {
      this.courses = result;
    }, error => router.navigate(['en/404']));
  }

  title = 'Courses';
}
