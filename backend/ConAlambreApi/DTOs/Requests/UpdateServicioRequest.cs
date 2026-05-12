namespace ConAlambreApi.DTOs.Requests
{
  
  public class UpdateServicioRequest{

    public string Nombre {get; set;}

    public int? IdUsuario {get; set;}

    public int? IdCategoria {get; set;} 

    public string Titulo {get; set;}

    public string Descripcion {get; set;}

    public double? Precio {get; set;}

    public string Ubicacion {get; set;}

  }
    
}
