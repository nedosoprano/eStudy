using DataAccess.Repositories;
using DataAccess;
using DataAccess.Models.Identity;

namespace webapi
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IDbContext, DbContext>();
            services.AddScoped<IRepository<Course>, CourseRepository>();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddHttpClient();
            services.AddAuthorization();
            services.AddControllers();

            var mongoDbSettings = _configuration.GetSection(nameof(MongoDbSettings)).Get<MongoDbSettings>();
            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddMongoDbStores<ApplicationUser, ApplicationRole, Guid>(
                mongoDbSettings.ConnectionString, mongoDbSettings.Name
                );
        }

        public void Configure(
            IApplicationBuilder appBuilder,
            IWebHostEnvironment webHostEnvironment)
        {
            appBuilder.UseDeveloperExceptionPage();
            appBuilder.UseHttpsRedirection();
            appBuilder.UseRouting();
            appBuilder.UseAuthentication();
            appBuilder.UseAuthorization();
            appBuilder.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}
