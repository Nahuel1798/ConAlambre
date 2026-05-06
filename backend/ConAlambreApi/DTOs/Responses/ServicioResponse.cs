namespace ConAlambreApi.DTOs.Responses
{
  
  public class ServicioResponse{

    public int Id {get; set;}

    public string Nombre {get; set;}

    public int IdUsuario {get; set;}

    public int IdCategoria {get; set;} 

    public string Titulo {get; set;}

    public string Descripcion {get; set;}

    public double Precio {get; set;}

    public string Ubicacion {get; set;}

  }
}
