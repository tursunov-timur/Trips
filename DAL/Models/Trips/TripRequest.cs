using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class TripRequest
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

        public string ActivityId { get; set; }

        public string DestinationId { get; set; }      

        public string TypeOfTripId { get; set; }
    }
}
