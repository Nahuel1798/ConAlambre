using System.ComponentModel.DataAnnotations;

namespace ConAlambreApi.DTOs.Requests
{
    public class CreatePerfilProfesionalRequest
    {
        [Required]
        public int UsuarioId { get; set; }
        
        [Required]
        public string Experiencia { get; set; }
        
        [Required]
        [MaxLength(300)]
        public string Descripcion { get; set; }
        
        [Required]
        public List<int> CategoriaIds { get; set; }
    }
}
