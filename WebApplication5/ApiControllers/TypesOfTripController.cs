using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL.Models;
using DAL.Services;

namespace WebApplication5.ApiControllers
{
    [RoutePrefix("api/TypesOfTrip")]
    public class TypesOfTripController : ApiController
    {
        TypesOfTripService TypesOfTripService = new TypesOfTripService();

        [HttpGet]
        [Route("getTypesOfTripList")]
        public IEnumerable<TypeOfTrip> GetTypesOfTripList()
        {
            return TypesOfTripService.GetTypesOfTripList();
        }

        [HttpGet]
        [Route("getTypeOfTripById/{id}")]
        public TypeOfTrip GetTypeOfTripById(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            return TypesOfTripService.GetTypeOfTripById(guid);
        }

        [HttpPost]
        [Route("createTypeOfTrip")]
        public TypeOfTrip CreateTypeOfTrip([FromBody]TypeOfTrip trip)
        {
            return TypesOfTripService.CreateTypeOfTrip(trip);
        }

        [HttpPost]
        [Route("updateTypeOfTrip")]
        public TypeOfTrip UpdateTypeOfTrip([FromBody]TypeOfTrip trip)
        {
            return TypesOfTripService.UpdateTypeOfTrip(trip);
        }

        [HttpGet]
        [Route("deleteTypeOfTrip/{id}")]
        public IEnumerable<TypeOfTrip> DeleteTypeOfTrip(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TypesOfTripService.DeleteTypeOfTrip(guid);
        }
    }
}
