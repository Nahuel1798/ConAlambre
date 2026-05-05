using ConAlambreApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ConAlambreApi.Data
{
  public class DataContext : DbContext{
    public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }

  }
    
}
