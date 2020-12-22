using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DAL.Services;
using DAL.Models.ViewModels;

namespace WebApplication5.Controllers
{
    public class VoyagerController : Controller
    {
        TripService TripService = new TripService();
        // GET: Voyager
        public ActionResult Index()
        {
            MainPageViewModel Model = new MainPageViewModel();
            Model = TripService.GetMainPageModel();
            return View(Model);
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contacts()
        {
            return View();
        }

        public ActionResult Tours()
        {
            var model = TripService.GetAllTrips();
            return View(model);
        }

        public ActionResult TourDetails(string id)
        {
            var guid = Guid.Parse(id);
            TripDetailsViewModel Model = new TripDetailsViewModel();
            Model = TripService.GetTripDetailsModel(guid);
            return View(Model);
        }

        public ActionResult SendMessage()
        {

            return RedirectToAction("Index");
        }
    }
}