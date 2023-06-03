using System;
using System.ComponentModel.DataAnnotations;

namespace DataAccess.Models.Identity
{
    public class User
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
