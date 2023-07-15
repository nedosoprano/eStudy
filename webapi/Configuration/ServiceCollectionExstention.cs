using DataAccess;
using DataAccess.Models.Identity;

namespace webapi.Configuration
{
    public static class ServiceCollectionExstention
    {
        public static IServiceCollection AddIdentity(this IServiceCollection services, IConfiguration configuration)
        {
            var mongoDbSettings = configuration.GetSection(nameof(MongoDbSettings)).Get<MongoDbSettings>();
            
            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddMongoDbStores<ApplicationUser, ApplicationRole, Guid>(
                mongoDbSettings.ConnectionString, mongoDbSettings.Name);

            return services;
        }
    }
}
