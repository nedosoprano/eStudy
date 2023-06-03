﻿import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { StudentCoursePageComponent } from "./student-pages/course/student-course-page.component";
import { StudentModulePageComponent } from "./student-pages/module/student-module-page.component";
import { StudentTaskPageComponent } from "./student-pages/task/student-task-page.component";
import { LogInPageComponent } from "./identity/login/login-page.component";
import { SignUpPageComponent } from "./identity/signup/signup-page.component";
import { NotFoundPageComponent } from "./notfound/notfound-page.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'en', redirectTo: 'login', pathMatch: 'full'},
    { path: 'en/login', component: LogInPageComponent},
    { path: 'en/signup', component: SignUpPageComponent},
    { path: 'en/main/teacher', component: MainPageComponent },
    { path: 'en/main/student', component: MainPageComponent },
    { path: 'en/course', redirectTo: 'main', pathMatch: "full"},
    { path: 'en/course/student/:courseId', component: StudentCoursePageComponent, pathMatch: "full"},
    { path: 'en/course/student/:courseId/module/:moduleId', component: StudentModulePageComponent, pathMatch: "full"},
    { path: 'en/course/student/:courseId/module/:moduleId/task', component: StudentTaskPageComponent, pathMatch: "full"},
    { path: 'en/404', component: NotFoundPageComponent },
    { path: '**', redirectTo: 'en/404' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}