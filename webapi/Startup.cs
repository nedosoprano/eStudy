using DataAccess.Repositories;
using DataAccess;
using webapi.Configuration;
using webapi.Services;
using Microsoft.AspNetCore.Authentication.Cookies;

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
            services.AddTransient<CertificateService>();
            services.AddTransient<CodeRunService>();
            services.AddTransient<IdentityService>();

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddHttpClient();
            services.AddAuthorization();
            services.AddControllers();
            services.AddIdentity(_configuration);
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
