using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ConAlambreApi.Models
{
    public class PerfilProfesional
    {
        [Key]
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Experiencia { get; set; }
        public string Descripcion { get; set; }
        public int UsuarioId { get; set; }
        
        [ForeignKey("UsuarioId")]
        public Usuario Usuario { get; set; }
        
        public ICollection<Categoria> Categorias { get; set; } = new List<Categoria>();
    }
}
