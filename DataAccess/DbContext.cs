using MongoDB.Driver;

namespace DataAccess
{
    public class DbContext : IDbContext
    {
        public IMongoDatabase Database { get; private set; }

        public DbContext()
        {
            MongoClient mongoClient = new MongoClient("mongodb://localhost/");
            Database = mongoClient.GetDatabase("eStudyDB");
        }
    }
}
