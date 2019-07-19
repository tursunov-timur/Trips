using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace DAL
{
    public class TripsDbInitializer: CreateDatabaseIfNotExists<TripsDbContext>
    {
        protected override void Seed(TripsDbContext context)
        {
            base.Seed(context);
        }
    }
}
