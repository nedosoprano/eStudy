import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { StudentCoursePageComponent } from "./student-pages/course/student-course-page.component";
import { StudentModulePageComponent } from "./student-pages/module/student-module-page.component";
import { StudentTaskPageComponent } from "./student-pages/task/student-task-page.component";

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'studentcourse', redirectTo: '', pathMatch: "full"},
    { path: 'studentcourse/:courseId', component: StudentCoursePageComponent, pathMatch: "full"},
    { path: 'studentcourse/:courseId/module/:moduleId', component: StudentModulePageComponent, pathMatch: "full"},
    { path: 'studentcourse/:courseId/module/:moduleId/task', component: StudentTaskPageComponent, pathMatch: "full"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}