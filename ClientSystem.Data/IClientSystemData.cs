namespace ClientSystem.Data
{
    using ClientSystem.Models;

    public interface IClientSystemData
    {
        IRepository<ApplicationUser> Users { get; }

        IRepository<Order> Orders { get; }

        int SaveChanges();
    }
}
