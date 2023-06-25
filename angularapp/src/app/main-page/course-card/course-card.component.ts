import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent{
    @Input() course: Course
    @Input() userRole: string

    constructor(private router: Router){     
    }

    onStartClick(){
        this.router.navigate(['/course/' + this.userRole + '/' + this.course.id + '/main'])
    }
}
