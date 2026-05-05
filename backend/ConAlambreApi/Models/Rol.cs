using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ConAlambreApi.Models{
  public class Rol {

    [Key]
    public int Id {get; set;}

    public string Nombre {get; set;}
  }
}