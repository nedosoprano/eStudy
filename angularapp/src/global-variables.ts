import { User } from "./app/models/user";

export class GlobalVariables {
    public static appUser: User;

    public static language: string = 'EN';  

    public isEnglish(): boolean {
        return GlobalVariables.language == 'EN';
    }
}