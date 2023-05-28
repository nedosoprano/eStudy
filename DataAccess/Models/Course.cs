using DataAccess.Models;

namespace DataAccess
{
    public class Course : EntityBase
    {
        public string Language { get; set; }

        public List<Module> Modules { get; set; }
    }
}