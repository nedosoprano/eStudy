import { HttpClient}  from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';
import { Course } from 'src/app/models/course';

@Injectable({
    providedIn: 'root',
  })
export class CourseService{
  private cookieService = inject(CookieService)
  
  constructor(private http: HttpClient){     
  }

  public storeCourseId(id: string){
    this.cookieService.set('courseId', id);
  }

  public async getSelectedCourse(): Promise<Course>{
    var courseId = this.getSelectedCourseIdFromCookies();
    var course = await lastValueFrom(this.http.get<Course>('/course/' + courseId));

    return course;
  }

  private getSelectedCourseIdFromCookies(): string{
    return this.cookieService.get('courseId');
  }
}
