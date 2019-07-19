using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication5.ApiControllers
{
    public class DestinationsController : ApiController
    {
        // GET: api/Destinations
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Destinations/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Destinations
        public void Post([FromBody]string value)
        {
        }

        [Route("UpdateDestination")]
        [HttpPost]
        // PUT: api/Destinations/5
        public void UpdateDestination(int id, [FromBody]string value)
        {
        }

        [Route("DeleteDestination")]
        [HttpPost]
        // DELETE: api/Destinations/5
        public void DeleteDestination(int id)
        {
        }
    }
}
