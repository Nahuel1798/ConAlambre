namespace ConAlambreApi.DTOs.Requests
{
    public class UsuarioRequest
    {
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public string? Email { get; set; }
        public string? Contrasena { get; set; }
        public string? Telefono { get; set; }
        public string? Rol { get; set; }
    }
}