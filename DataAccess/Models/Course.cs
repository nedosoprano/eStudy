using DataAccess.Models;

namespace DataAccess
{
    public class Course : EntityBase
    {
        public List<Module> Modules { get; set; }
    }
}