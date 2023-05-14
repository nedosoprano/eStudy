using DataAccess;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CourseController : ControllerBase
{
    private readonly IRepository<Course> _courseRepository;
    private readonly ILogger<CourseController> _logger;

    public CourseController(IRepository<Course> courseRepository, ILogger<CourseController> logger)
    {
        _courseRepository = courseRepository;
        _logger = logger;
    }

    [HttpGet(Name = "GetCourses")]
    public IEnumerable<Course> Get()
    {
        return _courseRepository.GetEntities().ToArray();
    }
}
