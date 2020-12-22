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
    [RoutePrefix("api/Destinations")]
    public class DestinationsController : ApiController
    {
        DesctinationsService DesctinationsService = new DesctinationsService();

        [HttpGet]
        [Route("getDestinationsList")]
        public IEnumerable<Destination> GetDestinationsList()
        {
            return DesctinationsService.GetDestinationsList();
        }

        [HttpGet]
        [Route("getDestinationById/{id}")]
        public Destination GetDestinationById(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            return DesctinationsService.GetDestinationById(guid);
        }

        [HttpPost]
        [Route("createDestination")]
        public Destination CreateDestination([FromBody]Destination trip)
        {
            return DesctinationsService.CreateDestination(trip);
        }

        [HttpPost]
        [Route("updateDestination")]
        public Destination UpdateDestination([FromBody]Destination trip)
        {
            return DesctinationsService.UpdateDestination(trip);
        }

        [HttpGet]
        [Route("deleteDestination/{id}")]
        public IEnumerable<Destination> DeleteDestination(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return DesctinationsService.DeleteDestination(guid);
        }

        [HttpGet]
        [Route("getKeyValueDestinationsList")]
        public IEnumerable<KeyValuePair<Guid, string>> GetKeyValueDestinationsList()
        {
            return DesctinationsService.GetKeyValueDestinationsList();
        }
    }
}
