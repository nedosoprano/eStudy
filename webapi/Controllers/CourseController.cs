using DataAccess;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class CourseController : ControllerBase
{
    private readonly IRepository<Course> _courseRepository;

    public CourseController(IRepository<Course> courseRepository)
    {
        _courseRepository = courseRepository;
    }

    [HttpGet("")]
    public IEnumerable<Course> Get() => _courseRepository.GetEntities().ToArray();

    [HttpGet("{courseId}")]
    public Course GetById(string courseId) => _courseRepository.GetById(courseId);
}
