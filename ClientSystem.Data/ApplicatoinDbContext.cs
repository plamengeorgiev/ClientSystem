namespace ClientSystem.Data
{
    using System.Data.Entity;

    using Microsoft.AspNet.Identity.EntityFramework;

    using ClientSystem.Models;

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("ClientSystemConnection", throwIfV1Schema: false)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, ClientSystem.Data.Migrations.Configuration>());
        }

        public IDbSet<Order> Orders { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    modelBuilder.Entity<Order>()
        //        .HasRequired(m => m.Driver)
        //        .WithMany(m => m.TripsWhereDriver)
        //        .HasForeignKey(m => m.DriverId)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Trip>()
        //        .HasMany(m => m.Passengers)
        //        .WithMany(m => m.Trips);
        //}
    }
}
