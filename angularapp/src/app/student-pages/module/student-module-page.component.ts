import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Module } from 'src/app/models/module';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-student-module-page',
  templateUrl: './student-module-page.component.html'
})

export class StudentModulePageComponent{
  module: Module

  constructor(private route: ActivatedRoute){ 
    this.route.params.subscribe((params: Params) => {
      let id = params['moduleId'];
      this.module = GlobalVariables.selectedCourse.modules.filter(module => module.id === id)[0];
    });
  }
}
