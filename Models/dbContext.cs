using Microsoft.EntityFrameworkCore;

namespace Churras.Models
{
    public class dbContext : DbContext
    {
        public DbSet<Churrasco> Churrascos { get; set; }
        public DbSet<Participante> Participantes { get; set; }
        public dbContext() : base() { }
        public dbContext(DbContextOptions<dbContext> options) : base(options) { }
    }
}
