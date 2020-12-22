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
    [RoutePrefix("api/Thems")]
    public class ThemsController : ApiController
    {
        ThemsService ThemsService = new ThemsService();

        // Thems
        [HttpGet]
        [Route("getThemsList")]
        public IEnumerable<Activity> GetThemsList()
        {
            var res =  ThemsService.GetThemsList();
            return res;
        }
        
        [HttpGet]
        [Route("getActivityById/{id}")]
        public Activity GetActivityById(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            return ThemsService.GetActivityById(guid);
        }

        [HttpPost]
        [Route("createActivity")]
        public Activity CreateActivity([FromBody]Activity trip)
        {
            return ThemsService.CreateActivity(trip);
        }

        [HttpPost]
        [Route("updateActivity")]
        public Activity UpdateActivity([FromBody]Activity trip)
        {
            return ThemsService.UpdateActivity(trip);
        }

        [HttpGet]
        [Route("deleteActivity/{id}")]
        public IEnumerable<Activity> DeleteActivity(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return ThemsService.DeleteActivity(guid);
        }

        [HttpGet]
        [Route("getKeyValueThemsList")]
        public IEnumerable<KeyValuePair<Guid, string>> GetKeyValueThemsList()
        {
            return ThemsService.GetKeyValueThemsList();
        }
    }
}
