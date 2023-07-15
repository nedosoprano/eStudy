using DataAccess.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using webapi.Models;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace webapi.Services
{
    public class IdentityService
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        public IdentityService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<User> SignIn(User user)
        {
            var appUser = await _userManager.FindByEmailAsync(user.Email);

            if (appUser != null)
            {
                SignInResult signInResult = await _signInManager.PasswordSignInAsync(appUser, user.Password, false, false);

                if (signInResult.Succeeded)
                {
                    var userRoles = new List<string>(await _userManager.GetRolesAsync(appUser));

                    return new User()
                    {
                        Name = appUser.UserName,
                        Email = appUser.Email,
                        Password = string.Empty,
                        Role = userRoles.FirstOrDefault()
                    };
                }
            }

            throw new Exception();
        }

        public async Task<IdentityResult> SignUp(User user)
        {
            var appUser = new ApplicationUser()
            {
                UserName = user.Name,
                Email = user.Email
            };

            IdentityResult result = await _userManager.CreateAsync(appUser, user.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(appUser, user.Role);
            }

            return result;
        }

        public async Task SignOutAsync()
        {
            await _signInManager.SignOutAsync();
        }
    }
}
