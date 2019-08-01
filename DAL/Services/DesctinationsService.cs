using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;

namespace DAL.Services
{
    public class DesctinationsService
    {
        public IEnumerable<Destination> GetDestinationsList()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.Destinations.Select(a => a).OrderBy(a => a.Name).ToList();
            }
        }

        public Destination GetDestinationById(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.Destinations.FirstOrDefault(a => a.Id == Id);
            }
        }

        public Destination CreateDestination(Destination newDestination)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                newDestination.Id = Guid.NewGuid();
                newDestination.IsActive = true;
                db.Destinations.Add(newDestination);
                db.SaveChanges();

                return newDestination;
            }
        }

        public Destination UpdateDestination(Destination activity)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentDestination = db.Destinations.FirstOrDefault(t => t.Id == activity.Id);
                currentDestination.Description = activity.Description;
                currentDestination.ImagePath = activity.ImagePath;     
                currentDestination.Name = activity.Name;
                currentDestination.ParentId = activity.ParentId;
                currentDestination.SeoDescription = activity.SeoDescription;
                currentDestination.SeoKeywords = activity.SeoKeywords;
                currentDestination.Url = activity.Url;
                db.SaveChanges();

                return currentDestination;
            }
        }

        public IEnumerable<Destination> DeleteDestination(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentDestination = db.Destinations.FirstOrDefault(t => t.Id == Id);
                currentDestination.IsActive = false;
                db.SaveChanges();

                return db.Destinations.Select(a => a).OrderBy(a => a.Name).ToList();
            }
        }

        public IEnumerable<KeyValuePair<Guid, string>> GetKeyValueDestinationsList()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var entitiesList = db.Destinations
                    .Where(a => a.IsActive)
                    .Select(a => new { a.Id, a.Name })
                    .OrderBy(a => a.Name).ToDictionary(x => x.Id, x => x.Name).ToList();

                return entitiesList;
            }
        }
    }
}
