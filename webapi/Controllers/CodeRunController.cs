using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using webapi.Models;
using webapi.Services;
using JsonConvert = Newtonsoft.Json.JsonConvert;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class CodeRunController : ControllerBase
{
    private readonly CodeRunService _codeRunService;

    public CodeRunController(CodeRunService codeRunService)
    {
        _codeRunService = codeRunService;
    }

    [HttpPost("{language}")]
    public async Task<string> RunCodeAsync([FromBody] string code, string language, CancellationToken cancellationToken)
    {
        return await _codeRunService.RunCodeAsync(code, language, cancellationToken);
    }
}
