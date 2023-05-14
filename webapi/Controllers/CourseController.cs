using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CourseController : ControllerBase
{
    private static readonly Course[] Courses = new[]
    {
        new Course
        {
            Title = "Java Basics",
            Summary = "The Java Basics course is designed to provide a comprehensive introduction to the fundamental concepts and principles of the Java programming language."
        },
        new Course
        {
            Title = "C# Programming Essentials",
            Summary = "The C# Programming Essentials course is a comprehensive introduction to the C# programming language, designed to equip you with the foundational knowledge and skills needed to develop robust and efficient software applications.",
        },
        new Course
        {
            Title = " Scala Programming Fundamentals",
            Summary = "The Scala Programming Fundamentals course is designed to provide a comprehensive introduction to the Scala programming language, empowering you with the essential knowledge and skills needed to leverage the power of Scala for building robust and scalable applications.",
        },
        new Course
        {
            Title = "Python Programming for Beginners",
            Summary = "The Python Programming for Beginners course is a comprehensive introduction to the Python programming language, designed to equip you with the foundational knowledge and skills necessary to start your journey as a Python developer."
        }
    };

    private readonly ILogger<CourseController> _logger;

    public CourseController(ILogger<CourseController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetCourses")]
    public IEnumerable<Course> Get()
    {
        return Courses;
    }
}
