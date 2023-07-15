import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { saveAs } from 'file-saver-es';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-editor-course-page',
  templateUrl: './teacher-editor-page.component.html',
  styleUrls: ['./teacher-editor-page.component.css']
})

export class TeacherEditorPageComponent{
  @ViewChild('fileInput') fileInput: any;
  public course: Course
  error: string

  constructor(protected router: ActivatedRoute, protected http: HttpClient, protected navigator: Router){
    let id;

    this.router.params.subscribe((params: Params) => {
      id = params['courseId']
    });
    
    this.http.get<Course>('/course/' + id).subscribe(result => {
      this.course = result;
    }, error => console.error(error));
  }

  onImportClick(){
    this.fileInput.nativeElement.click();
  }

  onExportClick(){
    var fileName = this.course.title + '.json';
    
    var courseInJson = JSON.stringify(this.course);
    var blob = new Blob([courseInJson], {type: "application/json;charset=utf-8"});

    saveAs(blob, fileName);
  }

  // this method is used for import, but it does not import smth, just opens the file explorer))
  handleFileInput(event: any): void {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
  
    reader.onload = () => {
      const fileContent: string = reader.result as string;
      const course: Course = JSON.parse(fileContent);
    };
  
    reader.readAsText(file);  
  }
}
