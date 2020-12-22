using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using DAL;
using DAL.Models;

namespace WebApplication5
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            using (TripsDbContext db = new TripsDbContext())
            {
                Theme CurrentTheme = db.Themes.FirstOrDefault(t => t.IsCurrentTheme);

                routes.MapRoute(
                     name: "ThemeController",
                     url: "{controller}/{action}/{id}",
                     defaults: new { controller = CurrentTheme.Name, action = "Index", id = UrlParameter.Optional }
                );

                routes.MapRoute(
                    name: "Default",
                    url: "{controller}/{action}/{id}",
                    defaults: new { controller = "Voyager", action = "Index", id = UrlParameter.Optional }
                );
                
            }
              
        }
    }
}
