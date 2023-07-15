import { Course } from "./app/models/course";
import { Message } from "./app/models/message";
import { User } from "./app/models/user";

export class GlobalVariables {
    public static appUser: User; 

    public static selectedCourse: Course;

    public static messages: Message[] = [    
        { userName: "Denys", text: "Good morning, Nataliia" } ,    
        { userName: "Nataliia", text: "Good morning" } ,    
        { userName: "Denys", text: "I'm having trouble figuring out how to approach the problem. It's about solving quadratic equations. Could you guide me through the steps" } ,    
        { userName: "Nataliia", text: "Absolutely, Denys. Solving quadratic equations can be tricky, but with the right approach, it becomes much easier. Let's start by looking at the equation itself. Could you please write it down for me?" } ,    
        { userName: "Denys", text: "Sure, here it is: 2x^2 + 5x - 3 = 0" } ,    
        { userName: "Nataliia", text: "Perfect. Now, let's try to factorize the equation. Look for two numbers that multiply to give -6 (the product of the coefficient of x^2 and the constant term), and add up to give the coefficient of x. Do you remember how to do that?" } ,    
        { userName: "Denys", text: "I think so. So, I need to find two numbers that multiply to -6 and add up to 5, right?" } ,    
        { userName: "Nataliia", text: "Exactly. Take your time and give it a try. Let me know if you need any hints along the way." } ,    
        { userName: "Denys", text: "I think I got it. The numbers are 6 and -1." } ,    
        { userName: "Nataliia", text: "Great job, Denys! You've got it. Now, we can rewrite the equation as (2x - 1)(x + 3) = 0. Do you follow so far?" } ,    
        { userName: "Denys", text: "Yes, I'm following. We've factored the equation. Now, how do we find the values of x?" } ,    
        { userName: "Nataliia", text: "Well, since we have two binomial factors, we can set each factor equal to zero and solve for x. What do you get when you set 2x - 1 equal to zero?" } ,    
        { userName: "Denys", text: "If I set 2x - 1 = 0, I get x = 1/2." } ,    
        { userName: "Nataliia", text: "Excellent. And what do you get when you set x + 3 equal to zero?" } ,    
        { userName: "Denys", text: "If I set x + 3 = 0, I get x = -3." } ,
        { userName: "Nataliia", text: "Perfect. So, the solutions to the quadratic equation are x = 1/2 and x = -3. Make sure to double-check your solutions by substituting them back into the original equation. Let me know if you have any other questions." } ,
        { userName: "Denys", text: "Thank you so much, Nataliia. I really appreciate your help. I'll double-check the solutions and let you know if I need any further assistance." } ,
        { userName: "Nataliia", text: "You're welcome. I'm always here to help. Don't hesitate to reach out if you have any other questions. Good luck with the rest of your homework!" } ,
        { userName: "Denys", text: "I will. Thanks again. Have a great day!" } ,
        { userName: "Nataliia", text: "You have a great day too!" }
      ]
}