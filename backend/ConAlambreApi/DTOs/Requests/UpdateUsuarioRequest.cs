namespace ConAlambreApi.DTOs.Requests
{
    public class UpdateUsuarioRequest
    {
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public string? Telefono { get; set; }
        public string? avatar { get; set; }
        public string? Rol { get; set; }
    }
}
