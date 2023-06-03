using DataAccess.Models.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Net;
using webapi.Models;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        public UserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager) 
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("signin")]
        public async Task<SignInResponce> SignIn([FromBody] User user)
        {
            var responce = new SignInResponce();

            if (ModelState.IsValid)
            {
                var appUser = await _userManager.FindByEmailAsync(user.Email);
                if (appUser != null)
                {
                    SignInResult signInResult = await _signInManager.PasswordSignInAsync(appUser, user.Password, false, false);


                    if (signInResult.Succeeded)
                    {
                        responce.StatusCode = HttpStatusCode.OK;

                        var userRoles = new List<string>(await _userManager.GetRolesAsync(appUser));
                        responce.Role = userRoles.FirstOrDefault();
                    }
                }
            }

            return responce;
        }

        [HttpPost("signup")]
        public async Task<HttpStatusCode> SignUp([FromBody] User user)
        {
            if (!ModelState.IsValid)
                return HttpStatusCode.BadRequest;

            var appUser = new ApplicationUser()
            {
                UserName = user.Name,
                Email = user.Email
            };

            IdentityResult result = await _userManager.CreateAsync(appUser, user.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(appUser, "Student");
                return HttpStatusCode.OK;
            }

            foreach (var error in result.Errors)
                ModelState.AddModelError(string.Empty, error.Description);

            return HttpStatusCode.BadRequest;
        }

        [Authorize]
        [Route("signout")]
        public async Task<IActionResult> SignOut()
        {
            await _signInManager.SignOutAsync();

            return Redirect("https://localhost:4200/en/login");
        }
    }
}
