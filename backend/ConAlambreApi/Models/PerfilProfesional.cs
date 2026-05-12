using System.ComponentModel.DataAnnotations;

namespace ConAlambreApi.Models
{
    public class PerfilProfesional
    {
        [Key]
        public int Id { get; set; }

        public string Titulo { get; set; }

        public string Experiencia { get; set; }

        public string Descripcion { get; set; }

        public string Categoria { get; set; }

        public int CategoriaId { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }
    }
}