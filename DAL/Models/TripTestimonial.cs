using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class TripTestimonial
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string Text { get; set; }

        public Guid TripId { get; set; }

        [ForeignKey("TripId")]
        public Trip Trip { get; set; }
    }
}
