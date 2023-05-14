import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { StudentCoursePageComponent } from "./student-pages/student-course-page.component";

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'studentcourse', component: StudentCoursePageComponent},
    { path: 'studentcourse/:id', component: StudentCoursePageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}