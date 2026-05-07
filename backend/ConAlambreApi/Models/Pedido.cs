using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ConAlambreApi.Models{
  public class Pedido {

    [Key]
    public int Id {get; set;}

    public string Titulo {get; set;}

    public string Descripcion {get; set;}

    public string Ubicacion {get; set;}

    public double Precio {get; set;}

    public int IdUsuario {get; set;}

    [ForeignKey("IdUsuario")]
    public Usuario Usuario {get; set;}
  }
}
