import { HttpClient} from '@angular/common/http';
import { Component} from '@angular/core';
import { saveAs } from 'file-saver-es';
import { Course } from 'src/app/models/course';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-student-final-page',
  templateUrl: './student-final-page.component.html',
  styleUrls: ['./student-final-page.component.css']
})

export class StudentFinalPageComponent{
  public userName: string = GlobalVariables.appUser.name

  get getCourse(): Course {
    return GlobalVariables.selectedCourse;
  }

  constructor(protected http: HttpClient){
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
