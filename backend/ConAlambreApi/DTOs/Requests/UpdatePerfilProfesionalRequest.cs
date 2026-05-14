namespace ConAlambreApi.DTOs.Requests
{
    public class UpdatePerfilProfesionalRequest
    {
        public string? Experiencia { get; set; }
        public string? Descripcion { get; set; }
        public List<int>? CategoriaIds { get; set; }
    }
}
