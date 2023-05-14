using System;

namespace DataAccess.Repositories
{
    public class CourseRepository : IRepository<Course>
    {
        private readonly List<Course> _courses;

        public CourseRepository() 
        {
            _courses = new List<Course>
            {
                new Course
                {
                    Id = 1,
                    Title = "Java Basics",
                    Summary = "The Java Basics course is designed to provide a comprehensive introduction to the fundamental concepts and principles of the Java programming language."
                },
                new Course
                {
                    Id = 2,
                    Title = "C# Programming Essentials",
                    Summary = "The C# Programming Essentials course is a comprehensive introduction to the C# programming language, designed to equip you with the foundational knowledge and skills needed to develop robust and efficient software applications.",
                },
                new Course
                {
                    Id = 3,
                    Title = " Scala Programming Fundamentals",
                    Summary = "The Scala Programming Fundamentals course is designed to provide a comprehensive introduction to the Scala programming language, empowering you with the essential knowledge and skills needed to leverage the power of Scala for building robust and scalable applications.",
                },
                new Course
                {
                    Id = 4,
                    Title = "Python Programming for Beginners",
                    Summary = "The Python Programming for Beginners course is a comprehensive introduction to the Python programming language, designed to equip you with the foundational knowledge and skills necessary to start your journey as a Python developer."
                }
            };
        }

        public List<Course> GetEntities() => _courses;
    }
}
