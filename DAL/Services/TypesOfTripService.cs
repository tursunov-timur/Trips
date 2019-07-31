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
                return db.TripTypes.Select(a => a).OrderBy(a => a.Name);
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
                currentTypeOfTrip.IsActive = activity.IsActive;
                currentTypeOfTrip.Name = activity.Name;
                currentTypeOfTrip.ParentId = activity.ParentId;
                currentTypeOfTrip.SeoDescription = activity.SeoDescription;
                currentTypeOfTrip.SeoKeywords = activity.SeoKeywords;
                currentTypeOfTrip.Url = activity.Url;

                return currentTypeOfTrip;
            }
        }

        public TypeOfTrip DeleteTypeOfTrip(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTypeOfTrip = db.TripTypes.FirstOrDefault(t => t.Id == Id);
                currentTypeOfTrip.IsActive = false;
                db.SaveChanges();

                return currentTypeOfTrip;
            }
        }
    }
}
