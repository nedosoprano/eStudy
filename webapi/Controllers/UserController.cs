using DataAccess.Models.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using webapi.Models;
using webapi.Services;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private IdentityService _identityService;

        public UserController(IdentityService identityService) 
        {
            _identityService = identityService;
        }

        [HttpPost("signin")]
        public async Task<SignInResponce> SignIn([FromBody] User user)
        {
            var responce = new SignInResponce();

            if (ModelState.IsValid)
            {
                try
                {
                    responce.User = await _identityService.SignIn(user);
                    responce.StatusCode = HttpStatusCode.OK;
                }
                catch
                {
                    responce.StatusCode = HttpStatusCode.BadRequest;
                }
            }

            return responce;
        }

        [HttpPost("signup")]
        public async Task<HttpStatusCode> SignUp([FromBody] User user)
        {
            if (!ModelState.IsValid)
                return HttpStatusCode.BadRequest;

            IdentityResult result = await _identityService.SignUp(user);
            if (result.Succeeded)
                return HttpStatusCode.OK;

            return HttpStatusCode.BadRequest;
        }

        [Authorize]
        [Route("signout")]
        public async Task<HttpStatusCode> SignOutAsync()
        {
            await _identityService.SignOutAsync();

            return HttpStatusCode.OK;
        }
    }
}
