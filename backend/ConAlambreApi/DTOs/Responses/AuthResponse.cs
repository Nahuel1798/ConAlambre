namespace ConAlambreApi.DTOs.Responses
{
  public class AuthResponse
  {
    public string Token { get; set; }
    public UsuarioResponse Usuario { get; set; }
  }
}
