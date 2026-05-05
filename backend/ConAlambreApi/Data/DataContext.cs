using ConAlambreApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ConAlambreApi.Data
{
  public class DataContext : DbContext{
    public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Categoria> Categorias { get; set; }
    public DbSet<Rol> Roles { get; set; }
    public DbSet<Pedido> Pedidos { get; set; }
    public DbSet<Servicio> Servicios { get; set; }

  }
    
}
