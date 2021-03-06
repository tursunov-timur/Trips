﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;

namespace DAL.Services
{
    public class TripService
    {
        public IEnumerable<Trip> GetAllTrips()
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var m = db.Trips.Select(y => y).ToList();
                var v = db.Trips
                    .Select(t => t)
                    .Where(t => t.IsActive)
                    .Include(t => t.Activity)
                    .Include(t => t.Destination)
                    .Include(t => t.TypeOfTrip)
                    .OrderByDescending(t => t.StartDate).ToList();

                return v;
            }
        }

        public Trip GetTripById(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.Trips
                    .Include(t => t.Activity)
                    .Include(t => t.Destination)
                    .Include(t => t.TypeOfTrip)
                    .FirstOrDefault(t => t.Id == Id);
            }
        }

        public Trip CreateTrip(TripRequest tripRequest)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                try
                {
                    Guid? activityId = new Guid();
                    if (!string.IsNullOrEmpty(tripRequest.ActivityId))
                    {
                        activityId = Guid.Parse(tripRequest.ActivityId);
                    }
                    else
                    {
                        activityId = null;
                    }

                    Guid? destinationId = new Guid();
                    if (!string.IsNullOrEmpty(tripRequest.DestinationId))
                    {
                        destinationId = Guid.Parse(tripRequest.DestinationId);
                    }
                    else
                    {
                        destinationId = null;
                    }

                    Guid? typeOfTripId = new Guid();
                    if (!string.IsNullOrEmpty(tripRequest.TypeOfTripId))
                    {
                        typeOfTripId = Guid.Parse(tripRequest.TypeOfTripId);
                    }
                    else
                    {
                        typeOfTripId = null;
                    }
                    

                    var newTrip = new Trip()
                    {
                        Id = Guid.NewGuid(),
                        IsActive = true,
                        Days = tripRequest.Days,
                        EndDate = tripRequest.EndDate,
                        GroupSize = tripRequest.GroupSize,
                        HasSale = tripRequest.HasSale,
                        ImagePath = tripRequest.ImagePath,
                        Map = tripRequest.Map,
                        Name = tripRequest.Name,
                        Nights = tripRequest.Nights,
                        Price = tripRequest.Price,
                        PriceText = tripRequest.PriceText,
                        Sale = tripRequest.Sale,
                        SeoDescription = tripRequest.SeoDescription,
                        SeoKeywords = tripRequest.SeoKeywords,
                        StartDate = tripRequest.StartDate,
                        Content = tripRequest.Content,
                        TourDates = tripRequest.TourDates,
                        Url = tripRequest.Url,
                        Activity = activityId != null ? db.Activities.FirstOrDefault(d => d.Id == activityId) : null,
                        Destination = destinationId != null ? db.Destinations.FirstOrDefault(d => d.Id == destinationId) : null,
                        TypeOfTrip = typeOfTripId != null ? db.TripTypes.FirstOrDefault(d => d.Id == typeOfTripId) : null,
                    };

                    db.Trips.Add(newTrip);
                    db.SaveChanges();

                    return newTrip;
                }
                catch(Exception e)
                {
                    return null;
                }
               
            }
        }

        public Trip UpdateTrip(TripRequest trip)
        {
           // var trip = ConvertToTripModel(tripRequest);
            using (TripsDbContext db = new TripsDbContext())
            {
                try
                {
                    Guid? activityId = new Guid();
                    if (trip.ActivityId != null)
                    {
                        activityId = Guid.Parse(trip.ActivityId);
                    }
                    else
                    {
                        activityId = null;
                    }

                    Guid? destinationId = new Guid();
                    if (trip.DestinationId != null)
                    {
                        destinationId = Guid.Parse(trip.DestinationId);
                    }
                    else
                    {
                        destinationId = null;
                    }

                    Guid? typeOfTripId = new Guid();
                    if (trip.TypeOfTripId != null)
                    {
                        typeOfTripId = Guid.Parse(trip.TypeOfTripId);
                    }
                    else
                    {
                        typeOfTripId = null;
                    }

                    var currentTrip = db.Trips.FirstOrDefault(t => t.Id == trip.Id);
                    currentTrip.Days = trip.Days;
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
                    currentTrip.SeoDescription = trip.SeoDescription;
                    currentTrip.SeoKeywords = trip.SeoKeywords;
                    currentTrip.StartDate = trip.StartDate;
                    currentTrip.Content = trip.Content;
                    currentTrip.TourDates = trip.TourDates;
                    currentTrip.Url = trip.Url;
                    currentTrip.Activity = activityId != null ? db.Activities.FirstOrDefault(d => d.Id == activityId) : null;
                    currentTrip.Destination = destinationId != null ? db.Destinations.FirstOrDefault(d => d.Id == destinationId) : null;
                    currentTrip.TypeOfTrip = typeOfTripId != null ? db.TripTypes.FirstOrDefault(d => d.Id == typeOfTripId) : null;
                    db.SaveChanges();

                    return currentTrip;
                }
                catch(Exception e)
                {
                    return null;
                }
               
            }
        }

        //public Trip ConvertToTripModel(TripRequest tripRequest)
        //{           
        //    //using (TripsDbContext db = new TripsDbContext())
        //    //{
        //    //    Guid destinationId = new Guid();
        //    //    var destination = new Destination();               
        //    //    if (!string.IsNullOrEmpty(tripRequest.DestinationId))
        //    //    {
        //    //        destinationId = Guid.Parse(tripRequest.DestinationId);
        //    //        destination = db.Destinations.FirstOrDefault(d => d.Id == destinationId);
        //    //    }

               
        //    //    var activity = new Activity();
        //    //    if (!string.IsNullOrEmpty(tripRequest.ActivityId))
        //    //    {
                   
        //    //        activity = 
        //    //    }

        //    //    Guid typeOfTripId = new Guid();
        //    //    var typeOfTrip = new TypeOfTrip();
        //    //    if (!string.IsNullOrEmpty(tripRequest.TypeOfTripId))
        //    //    {
        //    //        typeOfTripId = Guid.Parse(tripRequest.TypeOfTripId);
        //    //        typeOfTrip = db.TripTypes.FirstOrDefault(d => d.Id == typeOfTripId);
        //    //    }

                

        //    //    //newTrip.Activities.Add(activity);
        //    //    //newTrip.Destinations.Add(destination);
        //    //    //newTrip.TypesOfTrip.Add(typeOfTrip);

        //    //    return newTrip;
        //    //}
        //}

        public IEnumerable<Trip> DeleteTrip(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTrip = db.Trips.FirstOrDefault(t => t.Id == Id);
                currentTrip.IsActive = false;
                db.SaveChanges();

                return db.Trips.Select(t => t).Where(t => t.IsActive).OrderByDescending(t => t.StartDate).ToList();
            }            
        }      



        // Program Days
        public IEnumerable<TripProgram> GetProgramDaysByTripId(Guid tripId)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var d = db.TripPrograms.Select(t => t).Where(p => p.TripId == tripId && p.IsActive).OrderBy(t => t.DayNumber).ToList();
                return d;
            }
        }

        public TripProgram CreateProgramDay(TripProgram programDay)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                programDay.Id = Guid.NewGuid();
                programDay.IsActive = true;
                db.TripPrograms.Add(programDay);
                db.SaveChanges();

                return programDay;
            }
        }

        public TripProgram UpdateProgramDay(TripProgram programDay)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentprogramDay = db.TripPrograms.FirstOrDefault(t => t.Id == programDay.Id);
                currentprogramDay.DayNumber = programDay.DayNumber;
                currentprogramDay.Description = programDay.Description;
                currentprogramDay.Title = programDay.Title;
                currentprogramDay.TripId = programDay.TripId;
                currentprogramDay.IsActive = programDay.IsActive;

                return currentprogramDay;
            }
        }

        public TripProgram DeleteProgramDay(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentprogramDay = db.TripPrograms.FirstOrDefault(t => t.Id == Id);
                currentprogramDay.IsActive = false;

                db.SaveChanges();

                return currentprogramDay;
            }
        }


        // Trip prices
        public IEnumerable<TripPriceDesc> GetTripPricesByTripId(Guid tripId)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.TripPriceDescs.Select(t => t).Where(p => p.TripId == tripId && p.IsActive).OrderBy(t => t.Sort).ToList(); 
            }
        }

        public TripPriceDesc CreateTripPriceDesc(TripPriceDesc tripPriceDesc)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                tripPriceDesc.Id = Guid.NewGuid();
                tripPriceDesc.IsActive = true;
                db.TripPriceDescs.Add(tripPriceDesc);
                db.SaveChanges();

                return tripPriceDesc;
            }
        }

        public TripPriceDesc UpdateTripPriceDesc(TripPriceDesc tripPriceDesc)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTripPriceDesc = db.TripPriceDescs.FirstOrDefault(t => t.Id == tripPriceDesc.Id);
                currentTripPriceDesc.Description = tripPriceDesc.Description;
                currentTripPriceDesc.IsIncluded = tripPriceDesc.IsIncluded;
                currentTripPriceDesc.Title = tripPriceDesc.Title;
                currentTripPriceDesc.Sort = tripPriceDesc.Sort;
                currentTripPriceDesc.TripId = tripPriceDesc.TripId;
                currentTripPriceDesc.IsActive = tripPriceDesc.IsActive;

                return currentTripPriceDesc;
            }
        }

        public TripPriceDesc DeleteTripPriceDesc(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTripPriceDesc = db.TripPriceDescs.FirstOrDefault(t => t.Id == Id);
                currentTripPriceDesc.IsActive = false;

                db.SaveChanges();

                return currentTripPriceDesc;
            }
        }


        // Trip FAQs
        public IEnumerable<TripFAQ> GetTripFAQsByTripId(Guid tripId)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.TripFAQs.Select(t => t).Where(p => p.TripId == tripId && p.IsActive).OrderBy(t => t.Sort).ToList();
            }
        }

        public TripFAQ CreateTripFAQ(TripFAQ tripFAQ)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                tripFAQ.Id = Guid.NewGuid();
                tripFAQ.IsActive = true;
                db.TripFAQs.Add(tripFAQ);
                db.SaveChanges();

                return tripFAQ;
            }
        }

        public TripFAQ UpdateTripFAQ(TripFAQ tripFAQ)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTripFAQ = db.TripFAQs.FirstOrDefault(t => t.Id == tripFAQ.Id);
                currentTripFAQ.Description = tripFAQ.Description;
                currentTripFAQ.Sort = tripFAQ.Sort;
                currentTripFAQ.Title = tripFAQ.Title;
                currentTripFAQ.TripId = tripFAQ.TripId;
                currentTripFAQ.IsActive = tripFAQ.IsActive;

                return currentTripFAQ;
            }
        }

        public TripFAQ DeleteTripFAQ(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTripFAQ = db.TripFAQs.FirstOrDefault(t => t.Id == Id);
                currentTripFAQ.IsActive = false;
                db.SaveChanges();

                return currentTripFAQ;
            }
        }


        // Trip Photos
        public IEnumerable<TripFoto> GetTripFotosByTripId(Guid tripId)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                return db.TripFotos.Select(t => t).Where(p => p.TripId == tripId && p.IsActive).OrderBy(t => t.Sort).ToList();
            }
        }

        public TripFoto CreateTripFoto(TripFoto tripFoto)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                tripFoto.Id = Guid.NewGuid();
                tripFoto.IsActive = true;
                db.TripFotos.Add(tripFoto);
                db.SaveChanges();

                return tripFoto;
            }
        }

        public TripFoto UpdateTripFoto(TripFoto tripFoto)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTripFoto = db.TripFotos.FirstOrDefault(t => t.Id == tripFoto.Id);
                currentTripFoto.Path = tripFoto.Path;
                currentTripFoto.Sort = tripFoto.Sort;
                currentTripFoto.Title = tripFoto.Title;
                currentTripFoto.TripId = tripFoto.TripId;
                currentTripFoto.IsActive = tripFoto.IsActive;

                return currentTripFoto;
            }
        }

        public TripFoto DeleteTripFoto(Guid Id)
        {
            using (TripsDbContext db = new TripsDbContext())
            {
                var currentTripFoto = db.TripFotos.FirstOrDefault(t => t.Id == Id);
                currentTripFoto.IsActive = false;
                db.SaveChanges();

                return currentTripFoto;
            }
        }
    }
}
