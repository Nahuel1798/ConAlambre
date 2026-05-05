using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ConAlambreApi.Models{

  public class Servicio{
    [Key]
    public int Id {get; set;}

    public string Nombre {get; set;}

    [ForeignKey("id")]
    public int IdUsuario {get; set;}

    [ForeignKey("id")]
    public int IdCategoria {get; set;} 

    public string Titulo {get; set;}

    public string Descripcion {get; set;}

    public double Precio {get; set;}

    public string Ubicacion {get; set;}

  }

}
