using System;

namespace DataAccess.Models
{
    public abstract class EntityBase
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }
    }
}
