using DataAccess;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

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

    [HttpGet]
    public IEnumerable<Course> Get() => _courseRepository.GetEntities().ToArray();

    [HttpGet("{id}")]
    public Course GetById(int id) => _courseRepository.GetById(id);
}
