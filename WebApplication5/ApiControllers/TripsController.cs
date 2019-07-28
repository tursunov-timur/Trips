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
        public Trip DeleteTrip(string id)
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
    }
}
