using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using DAL.Models;

namespace DAL
{
    public class TripsDbContext : DbContext
    {
        public TripsDbContext() : base("DefaultConnection")
        {
            Database.SetInitializer(new TripsDbInitializer());
        }      
             

        public DbSet<Destination> Destinations { get; set; }

        public DbSet<Activity> Activities { get; set; }

        public DbSet<TypeOfTrip> TripTypes { get; set; }

        public DbSet<Trip> Trips { get; set; }

        public DbSet<TripFAQ> TripFAQs { get; set; }

        public DbSet<TripFoto> TripFotos { get; set; }

        public DbSet<TripPriceDesc> TripPriceDescs { get; set; }

        public DbSet<TripProgram> TripPrograms { get; set; }

        public DbSet<TripTestimonial> TripTestimonials { get; set; }
    }
}
