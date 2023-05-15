using DataAccess.Models;
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
                    Description = "The Java Basics course is designed to provide a comprehensive introduction to the fundamental concepts and principles of the Java programming language.",
                    Modules = new List<Module>
                    {
                        new Module()
                        {
                            Id = 1,
                            Title = "Module 1"
                        },
                        new Module()
                        {
                            Id = 2,
                            Title = "Module 2"
                        },
                        new Module()
                        {
                            Id = 3,
                            Title = "Module 3"
                        },
                        new Module()
                        {
                            Id = 4,
                            Title = "Module 4"
                        }
                    }
                },
                new Course
                {
                    Id = 2,
                    Title = "C# Programming Essentials",
                    Description = "The C# Programming Essentials course is a comprehensive introduction to the C# programming language, designed to equip you with the foundational knowledge and skills needed to develop robust and efficient software applications.",
                    Modules = new List<Module>
                    {
                        new Module()
                        {
                            Id = 1,
                            Title = "Module 1"
                        },
                        new Module()
                        {
                            Id = 2,
                            Title = "Module 2"
                        },
                        new Module()
                        {
                            Id = 3,
                            Title = "Module 3"
                        },
                        new Module()
                        {
                            Id = 4,
                            Title = "Module 4"
                        }
                    }
                },
                new Course
                {
                    Id = 3,
                    Title = " Scala Programming Fundamentals",
                    Description = "The Scala Programming Fundamentals course is designed to provide a comprehensive introduction to the Scala programming language, empowering you with the essential knowledge and skills needed to leverage the power of Scala for building robust and scalable applications.",
                    Modules = new List<Module>
                    {
                        new Module()
                        {
                            Id = 1,
                            Title = "Module 1"
                        },
                        new Module()
                        {
                            Id = 2,
                            Title = "Module 2"
                        },
                        new Module()
                        {
                            Id = 3,
                            Title = "Module 3"
                        },
                        new Module()
                        {
                            Id = 4,
                            Title = "Module 4"
                        }
                    }
                },
                new Course
                {
                    Id = 4,
                    Title = "Python Programming for Beginners",
                    Description = "The Python Programming for Beginners course is a comprehensive introduction to the Python programming language, designed to equip you with the foundational knowledge and skills necessary to start your journey as a Python developer.",
                    Modules = new List<Module>
                    {
                        new Module()
                        {
                            Id = 1,
                            Title = "Module 1"
                        },
                        new Module()
                        {
                            Id = 2,
                            Title = "Module 2"
                        },
                        new Module()
                        {
                            Id = 3,
                            Title = "Module 3"
                        },
                        new Module()
                        {
                            Id = 4,
                            Title = "Module 4"
                        }
                    }
                }
            };
        }

        public List<Course> GetEntities() => _courses;

        public Course GetById(int id) => _courses.Where(course => course.Id == id).FirstOrDefault();
    }
}
