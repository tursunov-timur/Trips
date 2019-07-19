using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;

namespace DAL.Services
{
    public class TripService
    {
        public TripsDbContext db = new TripsDbContext();

        public IQueryable<Trip> GetAllTrips()
        {
            return db.Trips.Select(t => t).OrderByDescending(t => t.StartDate);
        }

        public Trip GetTripById(Guid Id)
        {
            return db.Trips.FirstOrDefault(t => t.Id == Id);
        }
    }
}
