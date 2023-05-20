using System;
using DataAccess.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class CourseRepository : IRepository<Course>
    {
        private readonly IDbContext _dbContext;

        public CourseRepository(IDbContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public List<Course> GetEntities() 
            => _dbContext.Database.GetCollection<Course>("Courses").Find(new BsonDocument()).ToList();

        public Course GetById(string id) 
            => _dbContext.Database.GetCollection<Course>("Courses").Find(course => course.Id == id).FirstOrDefault();
    }
}
