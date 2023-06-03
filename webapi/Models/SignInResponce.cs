using System.Net;

namespace webapi.Models
{
    public class SignInResponce
    {
        public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.BadRequest;

        public string Role { get; set; } = string.Empty;

    }
}
