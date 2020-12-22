using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication5.Models;
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
        public Trip CreateTrip([FromBody]TripRequest trip)
        {
            return TripService.CreateTrip(trip);
        }

        [HttpPost]
        [Route("updateTrip")]
        public Trip UpdateTrip([FromBody]TripRequest trip)
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

        [Route("uploadImage")]
        [HttpPost]
        public IHttpActionResult UploadImage()
        {
            var file = HttpContext.Current.Request.Files.Count > 0 ? HttpContext.Current.Request.Files[0] : null;

            if (file != null && file.ContentLength > 0)
            {
                string guid = Guid.NewGuid().ToString();
                guid.Replace("-", "");
                var fileName = Path.GetFileName(file.FileName).Replace(" ", "");
                var names = fileName.Split('.');
                string nameStr = string.Empty;
                for (int i = 0; i < names.Length - 1; i++)
                {
                    nameStr += names[i];
                };
                fileName = nameStr + guid + "." + names[names.Length - 1];

                string folderPath = HttpContext.Current.Server.MapPath("~/Content/Uploads/Images/");
                string relativePath = "/Content/Uploads/Images/" + fileName;


                var fullPath = Path.Combine(folderPath, fileName);

                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                file.SaveAs(fullPath);

                ImageResponseModel ResponseMessage = new ImageResponseModel()
                {
                    imageUrl = relativePath
                };

                return Json(ResponseMessage);
            }
            return null;
        }

        [Route("uploadTripPhotos")]
        [HttpPost]
        public IHttpActionResult UploadTripPhotos()
        {           
            if (HttpContext.Current.Request.Files.Count > 0)
            {
                string tripId = HttpContext.Current.Request.Headers.GetValues("tripId")[0];

                foreach (string fName in HttpContext.Current.Request.Files)
                {
                    var file = HttpContext.Current.Request.Files[fName];
                    string guid = Guid.NewGuid().ToString();
                    guid = guid.Replace("-", "");
                    var fileName = Path.GetFileName(file.FileName).Replace(" ", "");
                    var fileNames = fileName.Split('.');
                    string newFileName = string.Empty;
                    for (var i = 0; i < fileNames.Length - 1; i++)
                    {
                        newFileName += fileNames[i];
                    }
                    newFileName += guid + "." + fileNames[fileNames.Length - 1];
                    

                    string folderPath = HttpContext.Current.Server.MapPath("~/Content/Uploads/Images/");
                    string relativePath = "/Content/Uploads/Images/" + newFileName;


                    var fullPath = Path.Combine(folderPath, newFileName);

                    if (!Directory.Exists(folderPath))
                    {
                        Directory.CreateDirectory(folderPath);
                    }

                    file.SaveAs(fullPath);

                    TripFoto newPhoto = new TripFoto()
                    {
                        Path = relativePath,
                        TripId = Guid.Parse(tripId)
                    };
                    TripService.CreateTripFoto(newPhoto);

                    ImageResponseModel ResponseMessage = new ImageResponseModel()
                    {
                        imageUrl = relativePath
                    };                    
                }
                
            }
            return null;
        }

        // Trip Photos
        [Route("getTripSchedulesByTripId/{id}")]
        [HttpGet]
        public IEnumerable<TripSchedule> GetTripSchedulesByTripId(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.GetTripSchedulesByTripId(guid);
        }

        [HttpPost]
        [Route("createTripSchedule")]
        public TripSchedule CreateTripSchedule([FromBody]TripSchedule tripSchedule)
        {
            return TripService.CreateTripSchedule(tripSchedule);
        }

        [HttpPost]
        [Route("updateTripSchedule")]
        public TripSchedule UpdateTripSchedule([FromBody]TripSchedule tripSchedule)
        {
            return TripService.UpdateTripSchedule(tripSchedule);
        }

        [HttpGet]
        [Route("deleteTripSchedule/{id}")]
        public TripSchedule DeleteTripSchedule(string id)
        {
            Guid guid = new Guid();
            Guid.TryParse(id, out guid);

            return TripService.DeleteTripSchedule(guid);
        }
    }
}
