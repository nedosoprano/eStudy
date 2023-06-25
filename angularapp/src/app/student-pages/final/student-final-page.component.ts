import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { saveAs } from 'file-saver-es';
import { Course } from 'src/app/models/course';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-student-final-page',
  templateUrl: './student-final-page.component.html',
  styleUrls: ['./student-final-page.component.css']
})

export class StudentFinalPageComponent{
  public course: Course
  public userName: string = GlobalVariables.appUser.name

  constructor(protected route: ActivatedRoute, protected http: HttpClient){
    let id;

    this.route.params.subscribe((params: Params) => {
      id = params['courseId']
    });
    
    this.http.get<Course>('/course/' + id).subscribe(result => {
      this.course = result;
    }, error => console.error(error));
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
