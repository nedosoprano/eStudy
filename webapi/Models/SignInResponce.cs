using DataAccess.Models.Identity;
using System.Net;

namespace webapi.Models
{
    public class SignInResponce
    {
        public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.BadRequest;

        public User User { get; set; }

    }
}
