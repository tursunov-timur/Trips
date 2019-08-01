using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;

namespace DAL.Services
{
    public class TypesOfTripService
    {
        public IEnumerable<TypeOfTrip> GetTypesOfTripList()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.TripTypes.Select(a => a).OrderBy(a => a.Name).ToList();
            }
        }

        public TypeOfTrip GetTypeOfTripById(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.TripTypes.FirstOrDefault(a => a.Id == Id);
            }
        }

        public TypeOfTrip CreateTypeOfTrip(TypeOfTrip newTypeOfTrip)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                newTypeOfTrip.Id = Guid.NewGuid();
                newTypeOfTrip.IsActive = true;
                db.TripTypes.Add(newTypeOfTrip);
                db.SaveChanges();

                return newTypeOfTrip;
            }
        }

        public TypeOfTrip UpdateTypeOfTrip(TypeOfTrip activity)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTypeOfTrip = db.TripTypes.FirstOrDefault(t => t.Id == activity.Id);
                currentTypeOfTrip.Description = activity.Description;
                currentTypeOfTrip.ImagePath = activity.ImagePath;
                currentTypeOfTrip.Name = activity.Name;
                currentTypeOfTrip.ParentId = activity.ParentId;
                currentTypeOfTrip.SeoDescription = activity.SeoDescription;
                currentTypeOfTrip.SeoKeywords = activity.SeoKeywords;
                currentTypeOfTrip.Url = activity.Url;
                db.SaveChanges();

                return currentTypeOfTrip;
            }
        }

        public IEnumerable<TypeOfTrip> DeleteTypeOfTrip(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTypeOfTrip = db.TripTypes.FirstOrDefault(t => t.Id == Id);
                currentTypeOfTrip.IsActive = false;
                db.SaveChanges();

                return db.TripTypes.Select(a => a).OrderBy(a => a.Name).ToList();
            }
        }

        public IEnumerable<KeyValuePair<Guid, string>> GetKeyValueTypeOfTripsList()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var entitiesList = db.TripTypes
                    .Where(a => a.IsActive)
                    .Select(a => new { a.Id, a.Name })
                    .OrderBy(a => a.Name).ToDictionary(x => x.Id, x => x.Name).ToList();

                return entitiesList;
            }
        }
    }
}
