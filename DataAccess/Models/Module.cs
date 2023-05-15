using System;

namespace DataAccess.Models
{
    public class Module : EntityBase
    {
        public List<Task> Tasks { get; set; }
    }
}
