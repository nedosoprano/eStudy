using DataAccess;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace webapi.Controllers;

[ApiController]
[Route("")]
public class CourseController : ControllerBase
{
    private readonly IRepository<Course> _courseRepository;
    private readonly ILogger<CourseController> _logger;

    public CourseController(IRepository<Course> courseRepository, ILogger<CourseController> logger)
    {
        _courseRepository = courseRepository;
        _logger = logger;
    }

    [HttpGet("course")]
    public IEnumerable<Course> Get() => _courseRepository.GetEntities().ToArray();

    [HttpGet("course/{courseId}")]
    public Course GetById(string courseId) => _courseRepository.GetById(courseId);

    [HttpGet("course/module/{moduleId}")]
    public Module GetCourseModuleById(string moduleId)
    {
        var courses = this.Get();
        
        var module = courses.SelectMany(course => course.Modules)
            .FirstOrDefault(module => module.Id == moduleId);

        return module;
    }
}
