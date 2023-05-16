using System;
using MongoDB.Driver;
using MongoDB.Bson;

namespace DataAccess.Repositories
{
    public class CourseRepository : IRepository<Course>
    {
        private readonly List<Course> _courses;

        public CourseRepository() 
        {
            MongoClient mongoClient = new MongoClient("mongodb://localhost/");
            IMongoDatabase dbContext = mongoClient.GetDatabase("eStudyDB");

            _courses = dbContext.GetCollection<Course>("Courses").Find(new BsonDocument()).ToList();
        }

        public List<Course> GetEntities() => _courses;

        public Course GetById(string id) => _courses.Where(course => course.Id == id).FirstOrDefault();
    }
}
