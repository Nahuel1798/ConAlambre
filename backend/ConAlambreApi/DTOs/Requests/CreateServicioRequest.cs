using System.ComponentModel.DataAnnotations;

namespace ConAlambreApi.DTOs.Requests
{
  
  public class CreateServicioRequest{

    [Required]
    public string Nombre {get; set;}

    [Required]
    public int IdUsuario {get; set;}

    [Required]
    public int IdCategoria {get; set;} 

    [Required]
    public string Titulo {get; set;}

    [Required]
    public string Descripcion {get; set;}

    [Required]
    public double Precio {get; set;}

    [Required]
    public string Ubicacion {get; set;}

  }
    
}
