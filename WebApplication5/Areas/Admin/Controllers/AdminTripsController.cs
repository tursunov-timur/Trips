using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication5.Areas.Admin.Controllers
{
    public class AdminTripsController : Controller
    {
        [Authorize]
        // GET: Admin/AdminTrips
        public ActionResult Index()
        {
            return View();
        }
    }
}