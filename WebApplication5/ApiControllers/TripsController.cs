using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DAL.Models;

namespace WebApplication5.ApiControllers
{
    [RoutePrefix("api/Trips")]
    public class TripsController : ApiController
    {
        public TripsDbContext db = new TripsDbContext();

        [Route("getTripsList")]
        [HttpGet]        
        public IHttpActionResult GetTripsList()
        {
            return Json(db.Trips.Select(t => t).OrderByDescending(t => t.StartDate));
        }

        [HttpGet]
        [Route("getTripById/{id}")]
        public IHttpActionResult GetTripById(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            return Json(db.Trips.Where(t => t.Id == guid));
        }

        [HttpPost]
        [Route("createTrip")]
        public IHttpActionResult CreateTrip([FromBody]Trip newTrip)
        {
            db.Trips.Add(newTrip);
            db.SaveChanges();
            return Json(db.Trips.Select(t => t).OrderByDescending(t => t.StartDate));
        }

        [HttpPost]
        [Route("updateTrip")]
        public IHttpActionResult UpdateTrip([FromBody]Trip newTrip)
        { 
            var currentTrip = db.Trips.FirstOrDefault(t => t.Id == newTrip.Id);
            currentTrip.Days         = currentTrip.Days;
            currentTrip.Destination  = currentTrip.Destination;
            currentTrip.EndDate      = currentTrip.EndDate;
            currentTrip.GroupSize    = currentTrip.GroupSize;
            currentTrip.HasSale      = currentTrip.HasSale;
            currentTrip.ImagePath    = currentTrip.ImagePath;
            currentTrip.Map          = currentTrip.Map;
            currentTrip.Name         = currentTrip.Name;
            currentTrip.Nights       = currentTrip.Nights;
            currentTrip.Price        = currentTrip.Price;
            currentTrip.PriceText    = currentTrip.PriceText;
            currentTrip.Sale         = currentTrip.Sale;
            currentTrip.StartDate    = currentTrip.StartDate;
            currentTrip.Text         = currentTrip.Text;
            currentTrip.TourDates    = currentTrip.TourDates;
            currentTrip.Url          = currentTrip.Url;
            db.SaveChanges();

            return Json(db.Trips.Select(t => t).OrderByDescending(t => t.StartDate));
        }

        [HttpGet]
        [Route("deleteTrip/{id}")]
        public IHttpActionResult DeleteTrip(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            var currentTrip = db.Trips.FirstOrDefault(t => t.Id == guid);
            db.Trips.Remove(currentTrip);
            db.SaveChanges();

            return Json(db.Trips.Select(t => t).OrderByDescending(t => t.StartDate));
        }
    }
}
