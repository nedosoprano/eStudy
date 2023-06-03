import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/app.component';

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
        this.router.navigate(['/en/studentcourse', this.course.id])
    }
}