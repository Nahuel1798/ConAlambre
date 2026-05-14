namespace ConAlambreApi.DTOs.Responses
{
    public class PerfilProfesionalResponse
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Experiencia { get; set; }
        public string Descripcion { get; set; }
        public List<CategoriaResponse> Categorias { get; set; }
        public int UsuarioId { get; set; }
    }
}
