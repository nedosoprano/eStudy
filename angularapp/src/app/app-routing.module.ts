import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { StudentCoursePageComponent } from "./student-pages/course/student-course-page.component";
import { StudentModulePageComponent } from "./student-pages/module/student-module-page.component";
import { StudentTaskPageComponent } from "./student-pages/task/student-task-page.component";
import { LogInPageComponent } from "./identity/login/login-page.component";
import { SignUpPageComponent } from "./identity/signup/signup-page.component";
import { NotFoundPageComponent } from "./notfound/notfound-page.component";
import { StudentFinalPageComponent } from "./student-pages/final/student-final-page.component";
import { TeacherCoursePageComponent } from "./teacher-pages/course/teacher-course-page.component";
import { TeacherEditorPageComponent } from "./teacher-pages/editor/teacher-editor-page.component";
import { StudentPageComponent } from "./student-pages/student-page.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'course', redirectTo: 'main', pathMatch: "full"},
    { path: 'login', component: LogInPageComponent},
    { path: 'signup', component: SignUpPageComponent},
    { path: 'main/teacher', component: MainPageComponent },
    { path: 'main/student', component: MainPageComponent },
    { path: 'course/student/:courseId', component: StudentPageComponent, children: [
        { path: 'main', component: StudentCoursePageComponent},
        { path: 'final', component: StudentFinalPageComponent},
        { path: 'module/:moduleId', component: StudentModulePageComponent },
        { path: 'module/:moduleId/task', component: StudentTaskPageComponent},
    ]},
    { path: 'course/teacher/:courseId', component: TeacherCoursePageComponent, pathMatch: "full"},
    { path: 'course/teacher/:courseId/edit', component: TeacherEditorPageComponent, pathMatch: "full"},
    { path: '404', component: NotFoundPageComponent },
    { path: '**', redirectTo: '404' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}