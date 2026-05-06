namespace ConAlambreApi.DTOs.Responses
{
    public class UsuarioResponse
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Rol { get; set; }
        public string Avatar { get; set; }
    }
}