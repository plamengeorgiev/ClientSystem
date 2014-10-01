namespace ClientSystem.Data
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    using ClientSystem.Models;

    public class ClientSystemData : IClientSystemData
    {
        private readonly DbContext context;

        private readonly IDictionary<Type, object> repositories;

        public ClientSystemData()
            : this(new ApplicationDbContext())
        {
        }

        public ClientSystemData(DbContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();
        }

        public IRepository<ApplicationUser> Users
        {
            get
            {
                return this.GetRepository<ApplicationUser>();
            }
        }

        public IRepository<Order> Orders
        {
            get
            {
                return this.GetRepository<Order>();
            }
        }

        public int SaveChanges()
        {
            return this.context.SaveChanges();
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            if (!this.repositories.ContainsKey(typeof(T)))
            {
                var type = typeof(EfRepository<T>);

                //// if (typeof(T).IsAssignableFrom(typeof(UserProfile)))
                //// {
                ////     type = typeof(UsersRepository);
                //// }

                this.repositories.Add(typeof(T), Activator.CreateInstance(type, this.context));
            }

            return (IRepository<T>)this.repositories[typeof(T)];
        }
    }
}
