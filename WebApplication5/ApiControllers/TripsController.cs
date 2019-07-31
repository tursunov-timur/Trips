using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DAL.Models;
using DAL.Services;

namespace WebApplication5.ApiControllers
{
    [RoutePrefix("api/Trips")]
    public class TripsController : ApiController
    {
        TripService TripService = new TripService();

        [Route("getTripsList")]
        [HttpGet]        
        public IEnumerable<Trip> GetTripsList()
        {
            return TripService.GetAllTrips();
        }

        [HttpGet]
        [Route("getTripById/{id}")]
        public Trip GetTripById(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            return TripService.GetTripById(guid);
        }

        [HttpPost]
        [Route("createTrip")]
        public Trip CreateTrip([FromBody]Trip trip)
        {
            return TripService.CreateTrip(trip);
        }

        [HttpPost]
        [Route("updateTrip")]
        public Trip UpdateTrip([FromBody]Trip trip)
        { 
            return TripService.UpdateTrip(trip);
        }

        [HttpGet]
        [Route("deleteTrip/{id}")]
        public IEnumerable<Trip> DeleteTrip(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);          

            return TripService.DeleteTrip(guid);
        }

        //Program Day
        [Route("GetProgramDaysByTripId/{id}")]
        [HttpGet]
        public IEnumerable<TripProgram> GetProgramDaysByTripId(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.GetProgramDaysByTripId(guid);
        }

        [HttpPost]
        [Route("createProgramDay")]
        public TripProgram CreateProgramDay([FromBody]TripProgram programDay)
        {
            return TripService.CreateProgramDay(programDay);
        }

        [HttpPost]
        [Route("updateProgramDay")]
        public TripProgram UpdateProgramDay([FromBody]TripProgram programDay)
        {
            return TripService.UpdateProgramDay(programDay);
        }

        [HttpGet]
        [Route("deleteProgramDay/{id}")]
        public TripProgram DeleteProgramDay(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.DeleteProgramDay(guid);
        }


        // Trip Prices
        [Route("getTripPricesByTripId/{id}")]
        [HttpGet]
        public IEnumerable<TripPriceDesc> GetTripPricesByTripId(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.GetTripPricesByTripId(guid);
        }

        [HttpPost]
        [Route("createTripPriceDesc")]
        public TripPriceDesc CreateTripPriceDesc([FromBody]TripPriceDesc tripPriceDesc)
        {
            return TripService.CreateTripPriceDesc(tripPriceDesc);
        }

        [HttpPost]
        [Route("updateTripPriceDesc")]
        public TripPriceDesc UpdateTripPriceDesc([FromBody]TripPriceDesc tripPriceDesc)
        {
            return TripService.UpdateTripPriceDesc(tripPriceDesc);
        }

        [HttpGet]
        [Route("deleteTripPriceDesc/{id}")]
        public TripPriceDesc DeleteTripPriceDesc(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.DeleteTripPriceDesc(guid);
        }


        // Trip FAQ
        [Route("getTripFAQByTripId/{id}")]
        [HttpGet]
        public IEnumerable<TripFAQ> GetTripFAQByTripId(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.GetTripFAQsByTripId(guid);
        }

        [HttpPost]
        [Route("createTripFAQ")]
        public TripFAQ CreateTripFAQ([FromBody]TripFAQ tripFAQ)
        {
            return TripService.CreateTripFAQ(tripFAQ);
        }

        [HttpPost]
        [Route("updateTripFAQ")]
        public TripFAQ UpdateTripFAQ([FromBody]TripFAQ tripFAQ)
        {
            return TripService.UpdateTripFAQ(tripFAQ);
        }

        [HttpGet]
        [Route("deleteTripFAQ/{id}")]
        public TripFAQ DeleteTripFAQ(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.DeleteTripFAQ(guid);
        }

      

        // Trip Photos
        [Route("getTripFotosByTripId/{id}")]
        [HttpGet]
        public IEnumerable<TripFoto> GetTripFotosByTripId(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.GetTripFotosByTripId(guid);
        }

        [HttpPost]
        [Route("createTripFoto")]
        public TripFoto CreateTripFoto([FromBody]TripFoto tripFoto)
        {
            return TripService.CreateTripFoto(tripFoto);
        }

        [HttpPost]
        [Route("updateTripFoto")]
        public TripFoto UpdateTripFoto([FromBody]TripFoto tripFoto)
        {
            return TripService.UpdateTripFoto(tripFoto);
        }

        [HttpGet]
        [Route("deleteTripFoto/{id}")]
        public TripFoto DeleteTripFoto(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.DeleteTripFoto(guid);
        }
    }
}
