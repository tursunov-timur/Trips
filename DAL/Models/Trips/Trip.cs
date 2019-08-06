using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Trip
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public string Url { get; set; }
        public string ImagePath { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Decimal Price { get; set; }
        public string PriceText { get; set; }
        public Decimal Sale { get; set; }
        public bool HasSale { get; set; }
        public int Days { get; set; }
        public int Nights { get; set; }
        public int GroupSize { get; set; }
        public string TourDates { get; set; }
        public string Map { get; set; }
        public bool IsActive { get; set; }
        public string SeoDescription { get; set; }
        public string SeoKeywords { get; set; }
       
        public Guid? ActivityId { get; set; }        
        public virtual Activity Activity { get; set; }

        public Guid? DestinationId { get; set; }
        public virtual Destination Destination { get; set; }

        public Guid? TypeOfTripId { get; set; }
        public virtual TypeOfTrip TypeOfTrip { get; set; }
    }
}
