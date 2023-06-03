using System;

namespace DataAccess
{
    public class MongoDbSettings
    {
        public string Name { get; set; }

        public string Host { get; set; }

        public string ConnectionString => $"mongodb://{Host}/";
    }
}
