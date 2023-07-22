import { HttpClient} from '@angular/common/http';
import { Component, OnInit, inject} from '@angular/core';
import { saveAs } from 'file-saver-es';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/services/course.service';
import { IdentityService } from 'src/services/identity.service';

@Component({
  selector: 'app-student-final-page',
  templateUrl: './student-final-page.component.html',
  styleUrls: ['./student-final-page.component.css']
})

export class StudentFinalPageComponent implements OnInit{
  public course: Course;
  public userName: string;
  identityService = inject(IdentityService);

  constructor(private http: HttpClient, private courseService: CourseService){
  }

  async ngOnInit() {
    this.userName = this.identityService.getCurrentUser().name;
    this.course = await this.courseService.getSelectedCourse();
  }

  onClick(){
    this.http.get('/certificate', { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
      var blob = new  Blob([data], {type: "application/pdf;charset=utf-8"});
      saveAs(blob, 'eStudy-certificate.pdf');
    }, (error) => {
      console.error('An error occurred:', error);
    });
  }
}
