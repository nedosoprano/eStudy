using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;
using System;

namespace DataAccess.Models.Identity
{
    [CollectionName("Roles")]
    public class ApplicationRole : MongoIdentityRole<Guid>
    {
    }
}
