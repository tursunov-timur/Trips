using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;

namespace DAL.Services
{
    public class ActivitiesService
    {
        public IEnumerable<Activity> GetActivitiesList()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.Activities.Where(a => a.IsActive).OrderBy(a => a.Name).ToList();
            }
        }

        public Activity GetActivityById(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.Activities.FirstOrDefault(a => a.Id == Id);
            }
        }

        public Activity CreateActivity(Activity newActivity)
        {
            using (TripsDbContext db = new TripsDbContext())
            {            
                newActivity.Id = Guid.NewGuid();
                newActivity.IsActive = true;
                db.Activities.Add(newActivity);
                db.SaveChanges();

                return newActivity;
            }
        }

        public Activity UpdateActivity(Activity activity)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentActivity = db.Activities.FirstOrDefault(t => t.Id == activity.Id);
                currentActivity.Description = activity.Description;
                currentActivity.ImagePath = activity.ImagePath;
                currentActivity.Name = activity.Name;
                currentActivity.ParentId = activity.ParentId;
                currentActivity.SeoDescription = activity.SeoDescription;
                currentActivity.SeoKeywords = activity.SeoKeywords;
                currentActivity.Url = activity.Url;
                db.SaveChanges();

                return currentActivity;
            }
        }

        public IEnumerable<Activity> DeleteActivity(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentActivity = db.Activities.FirstOrDefault(t => t.Id == Id);
                currentActivity.IsActive = false;
                db.SaveChanges();

                return db.Activities.Select(a => a).Where(a => a.IsActive).OrderBy(a => a.Name).ToList(); 
            }
        }

        public Dictionary<Guid, string> GetKeyValueActivityList()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var entitiesList = db.Activities
                    .Where(a => a.IsActive)
                    .Select(a => new { a.Id, a.Name })                    
                    .OrderBy(a => a.Name).ToDictionary(x => x.Id, x => x.Name);

                return entitiesList;
            }
        }
    }
}
