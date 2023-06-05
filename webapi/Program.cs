using Microsoft.AspNetCore;

namespace webapi
{
    public static class Program
    {
        /// <param name="args"></param>
        public static void Main(string[] args)
            => CreateWebHostBuilder(args)
                .Build()
                .Run();

        private static IWebHostBuilder CreateWebHostBuilder(string[] args)
            => WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}