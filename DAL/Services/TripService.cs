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

        public IEnumerable<Trip> GetAllTrips()
        {
            return db.Trips.Select(t => t).OrderByDescending(t => t.StartDate);
        }

        public Trip GetTripById(Guid Id)
        {
            return db.Trips.FirstOrDefault(t => t.Id == Id);
        }

        public Trip CreateTrip(Trip newTrip)
        {
            newTrip.Id = Guid.NewGuid();
            db.Trips.Add(newTrip);
            db.SaveChanges();

            return newTrip;
        }

        public Trip UpdateTrip(Trip trip)
        {
            var currentTrip = db.Trips.FirstOrDefault(t => t.Id == trip.Id);
            currentTrip.Activity = trip.Activity;
            currentTrip.Days = trip.Days;
            currentTrip.Destination = trip.Destination;
            currentTrip.EndDate = trip.EndDate;
            currentTrip.GroupSize = trip.GroupSize;
            currentTrip.HasSale = trip.HasSale;
            currentTrip.ImagePath = trip.ImagePath;
            currentTrip.Map = trip.Map;
            currentTrip.Name = trip.Name;
            currentTrip.Nights = trip.Nights;
            currentTrip.Price = trip.Price;
            currentTrip.PriceText = trip.PriceText;
            currentTrip.Sale = trip.Sale;
            currentTrip.SEO = trip.SEO;
            currentTrip.StartDate = trip.StartDate;
            currentTrip.Text = trip.Text;
            currentTrip.TourDates = trip.TourDates;
            currentTrip.TypeOfTrip = trip.TypeOfTrip;
            currentTrip.Url = trip.Url;

            return currentTrip;
        }

        public Trip DeleteTrip(Guid Id)
        {
            var currentTrip = db.Trips.FirstOrDefault(t => t.Id == Id);
            db.Trips.Remove(currentTrip);
            db.SaveChanges();

            return currentTrip;
        }


        // Program Days
        public IEnumerable<TripProgram> GetProgramDaysByTripId(Guid tripId)
        {
            return db.TripPrograms.Select(t => t).Where(p => p.TripId == tripId).OrderBy(t => t.DayNumber);
        }

        public TripProgram CreateProgramDay(TripProgram programDay)
        {
            programDay.Id = Guid.NewGuid();
            db.TripPrograms.Add(programDay);
            db.SaveChanges();

            return programDay;
        }

        public TripProgram UpdateProgramDay(TripProgram programDay)
        {
            var currentprogramDay = db.TripPrograms.FirstOrDefault(t => t.Id == programDay.Id);
            currentprogramDay.DayNumber = programDay.DayNumber;
            currentprogramDay.Description = programDay.Description;
            currentprogramDay.Title = programDay.Title;
            currentprogramDay.TripId = programDay.TripId;

            return currentprogramDay;
        }

        public TripProgram DeleteProgramDay(Guid Id)
        {
            var currentprogramDay = db.TripPrograms.FirstOrDefault(t => t.Id == Id);
            db.TripPrograms.Remove(currentprogramDay);
            db.SaveChanges();

            return currentprogramDay;
        }


        // Trip prices
        public IEnumerable<TripPriceDesc> GetTripPricesByTripId(Guid tripId)
        {
            return db.TripPriceDescs.Select(t => t).Where(p => p.TripId == tripId).OrderBy(t => t.Sort);
        }

        public TripPriceDesc CreateTripPriceDesc(TripPriceDesc tripPriceDesc)
        {
            tripPriceDesc.Id = Guid.NewGuid();
            db.TripPriceDescs.Add(tripPriceDesc);
            db.SaveChanges();

            return tripPriceDesc;
        }

        public TripPriceDesc UpdateTripPriceDesc(TripPriceDesc tripPriceDesc)
        {
            var currentTripPriceDesc = db.TripPriceDescs.FirstOrDefault(t => t.Id == tripPriceDesc.Id);
            currentTripPriceDesc.Description = tripPriceDesc.Description;
            currentTripPriceDesc.IsIncluded = tripPriceDesc.IsIncluded;
            currentTripPriceDesc.Title = tripPriceDesc.Title;
            currentTripPriceDesc.Sort = tripPriceDesc.Sort;
            currentTripPriceDesc.TripId = tripPriceDesc.TripId;

            return currentTripPriceDesc;
        }

        public TripPriceDesc DeleteTripPriceDesc(Guid Id)
        {
            var currentTripPriceDesc = db.TripPriceDescs.FirstOrDefault(t => t.Id == Id);
            db.TripPriceDescs.Remove(currentTripPriceDesc);
            db.SaveChanges();

            return currentTripPriceDesc;
        }

        // Trip FAQs
        public IEnumerable<TripFAQ> GetTripFAQsByTripId(Guid tripId)
        {
            return db.TripFAQs.Select(t => t).Where(p => p.TripId == tripId).OrderBy(t => t.Sort);
        }

        public TripFAQ CreateTripFAQ(TripFAQ tripFAQ)
        {
            tripFAQ.Id = Guid.NewGuid();
            db.TripFAQs.Add(tripFAQ);
            db.SaveChanges();

            return tripFAQ;
        }

        public TripFAQ UpdateTripFAQ(TripFAQ tripFAQ)
        {
            var currentTripFAQ = db.TripFAQs.FirstOrDefault(t => t.Id == tripFAQ.Id);
            currentTripFAQ.Description = tripFAQ.Description;
            currentTripFAQ.Sort = tripFAQ.Sort;
            currentTripFAQ.Title = tripFAQ.Title;
            currentTripFAQ.TripId = tripFAQ.TripId;

            return currentTripFAQ;
        }

        public TripFAQ DeleteTripFAQ(Guid Id)
        {
            var currentTripFAQ = db.TripFAQs.FirstOrDefault(t => t.Id == Id);
            db.TripFAQs.Remove(currentTripFAQ);
            db.SaveChanges();

            return currentTripFAQ;
        }


        // Trip Photos
        public IEnumerable<TripFoto> GetTripFotosByTripId(Guid tripId)
        {
            return db.TripFotos.Select(t => t).Where(p => p.TripId == tripId).OrderBy(t => t.Sort);
        }

        public TripFoto CreateTripFoto(TripFoto tripFoto)
        {
            tripFoto.Id = Guid.NewGuid();
            db.TripFotos.Add(tripFoto);
            db.SaveChanges();

            return tripFoto;
        }

        public TripFoto UpdateTripFoto(TripFoto tripFoto)
        {
            var currentTripFoto = db.TripFotos.FirstOrDefault(t => t.Id == tripFoto.Id);
            currentTripFoto.Path = tripFoto.Path;
            currentTripFoto.Sort = tripFoto.Sort;
            currentTripFoto.Title = tripFoto.Title;
            currentTripFoto.TripId = tripFoto.TripId;

            return currentTripFoto;
        }

        public TripFoto DeleteTripFoto(Guid Id)
        {
            var currentTripFoto = db.TripFotos.FirstOrDefault(t => t.Id == Id);
            db.TripFotos.Remove(currentTripFoto);
            db.SaveChanges();

            return currentTripFoto;
        }
    }
}
