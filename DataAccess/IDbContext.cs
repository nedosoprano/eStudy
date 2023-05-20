using System;
using MongoDB.Driver;

namespace DataAccess
{
    public interface IDbContext
    {
        public IMongoDatabase Database { get; }
    }
}
