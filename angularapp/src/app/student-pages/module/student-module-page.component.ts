import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Module } from 'src/app/models/module';
import { CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-student-module-page',
  templateUrl: './student-module-page.component.html'
})

export class StudentModulePageComponent implements OnInit{
  module: Module

  constructor(private route: ActivatedRoute, private courseService: CourseService){ 
  }

  async ngOnInit() {
    var selectedCourse = await this.courseService.getSelectedCourse();

    this.route.params.subscribe((params: Params) => {
      let id = params['moduleId'];
      this.module = selectedCourse.modules.filter(module => module.id === id)[0];
    });
  }
}
