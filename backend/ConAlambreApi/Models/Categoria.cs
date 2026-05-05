using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ConAlambreApi.Models{
  public class Categoria{

    [Key]
    public int Id {get; set;}

    public string Nombre {get; set;}

    public string Descripcion {get; set;}
  }
}
