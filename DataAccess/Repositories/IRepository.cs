using System;

namespace DataAccess.Repositories
{
    public interface IRepository<T>
    {
        public List<T> GetEntities();

        public T GetById(int id);
    }
}
