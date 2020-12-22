using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DAL.Services;
using DAL.Models.ViewModels;

namespace WebApplication5.Controllers
{
    public class MountainsController : Controller
    {
        TripService TripService = new TripService();
       
        public ActionResult Index()
        {
            MainPageViewModel Model = new MainPageViewModel();
            Model = TripService.GetMainPageModel();
            return View(Model);
        }
    }
}