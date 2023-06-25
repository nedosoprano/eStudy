import { Course } from "./app/models/course";
import { User } from "./app/models/user";

export class GlobalVariables {
    public static appUser: User;

    public static language: string = 'EN';  

    public static selectedCourse: Course;
}