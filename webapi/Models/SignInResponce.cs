using DataAccess.Models.Identity;
using System.Net;

namespace webapi.Models
{
    public class SignInResponce
    {
        public HttpStatusCode StatusCode { get; set; }

        public User User { get; set; }
    }
}
