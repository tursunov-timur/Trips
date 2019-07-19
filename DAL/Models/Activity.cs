using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Activity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Url { get; set; }

        public string ImagePath { get; set; }

        public Guid ParentId { get; set; }

        public Guid SEOId { get; set; }

        [ForeignKey("SEOId")]
        public SEO SEO { get; set; }
    }
}
