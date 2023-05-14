import { Component, Input } from '@angular/core';
import { Course } from '../main-page.component'
import { Router } from '@angular/router';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent{
    @Input() course: Course

    constructor(private router: Router){     
    }

    onStartClick(){
        this.router.navigate(['/studentcourse', this.course.id])
    }
}