using Microsoft.AspNetCore.Mvc;
using System.Text;
using webapi.Models;
using JsonConvert = Newtonsoft.Json.JsonConvert;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CodeRunController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public CodeRunController()
    {
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Token 5b63bede-d068-4190-8e61-ffc5795dbd31");
    }

    [HttpPost("{language}")]
    public async Task<string> PostAsync([FromBody] string code, string language, CancellationToken cancellationToken)
    {
        var request = PrepareRequest(code, language);

        var response = await _httpClient.PostAsync($"https://glot.io/api/run/{language}/latest", request);
        var responseContent = await response.Content.ReadAsStringAsync();
        var responseObject = JsonConvert.DeserializeObject<dynamic>(responseContent);

        return responseObject.stdout;
    }

    private StringContent PrepareRequest(string code, string language)
    {
        var request = new GlotIORequest
        {
            CodeFiles = new List<CodeFile>()
            {
                new CodeFile
                {
                    Name = GetEntrypointFile(language),
                    Content = code
                }
            }
        };

        var content = new StringContent(
            JsonConvert.SerializeObject(request),
            Encoding.UTF8,
            "application/json"
            );

        return content;
    }

    private string GetEntrypointFile(string language)
    {
        switch (language)
        {
            case "java":
                return "Main.java";

            case "csharp":
                return "Program.cs";

            case "scala":
                return "main.scala";

            case "python":
                return "main.py";

            default: return string.Empty;
        }
    }
}
