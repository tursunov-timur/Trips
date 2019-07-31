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
    [RoutePrefix("api/Activities")]
    public class ActivitiesController : ApiController
    {
        ActivitiesService ActivitiesService = new ActivitiesService();

        // Activities
        [HttpGet]
        [Route("getActivitiesList")]
        public IEnumerable<Activity> GetActivitiesList()
        {
            var res =  ActivitiesService.GetActivitiesList();
            return res;
        }
        
        [HttpGet]
        [Route("getActivityById/{id}")]
        public Activity GetActivityById(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);
            return ActivitiesService.GetActivityById(guid);
        }

        [HttpPost]
        [Route("createActivity")]
        public Activity CreateActivity([FromBody]Activity trip)
        {
            return ActivitiesService.CreateActivity(trip);
        }

        [HttpPost]
        [Route("updateActivity")]
        public Activity UpdateActivity([FromBody]Activity trip)
        {
            return ActivitiesService.UpdateActivity(trip);
        }

        [HttpGet]
        [Route("deleteActivity/{id}")]
        public IEnumerable<Activity> DeleteActivity(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return ActivitiesService.DeleteActivity(guid);
        }

        [HttpGet]
        [Route("getKeyValueActivityList")]
        public IEnumerable<Dictionary<Guid, string>> GetKeyValueActivityList()
        {
            return ActivitiesService.GetKeyValueActivityList();
        }
    }
}
