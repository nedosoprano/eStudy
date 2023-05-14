import { Component, Input } from '@angular/core';
import { Course } from '../main-page.component'

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent{
    @Input() course: Course

    onStartClick(){
        
    }
}