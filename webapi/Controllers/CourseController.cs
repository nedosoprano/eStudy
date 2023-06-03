using DataAccess;
using DataAccess.Models;
using DataAccess.Models.Identity;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class CourseController : ControllerBase
{
    private readonly IRepository<Course> _courseRepository;
    private readonly ILogger<CourseController> _logger;

    public CourseController(IRepository<Course> courseRepository, ILogger<CourseController> logger)
    {
        _courseRepository = courseRepository;
        _logger = logger;
    }

    [HttpGet("")]
    public IEnumerable<Course> Get() => _courseRepository.GetEntities().ToArray();

    [HttpGet("{courseId}")]
    public Course GetById(string courseId) => _courseRepository.GetById(courseId);

    [HttpGet("module/{moduleId}")]
    public Module GetCourseModuleById(string moduleId)
    {
        var courses = this.Get();
        
        var module = courses.SelectMany(course => course.Modules)
            .FirstOrDefault(module => module.Id == moduleId);

        return module;
    }
}
