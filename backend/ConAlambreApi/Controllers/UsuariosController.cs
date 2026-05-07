using ConAlambreApi.Data;
using ConAlambreApi.DTOs.Responses;
using ConAlambreApi.DTOs.Requests;
using ConAlambreApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ConAlambreApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UsuariosController : ControllerBase
    {
        private readonly DataContext _context;

        public UsuariosController(DataContext context)
        {
            _context = context;
        }

        // Trae todos los usuarios
        // GET: api/Usuarios/todos
        [HttpGet("todos")]
        public ActionResult GetUsuarios()
        {
            var usuarios = _context.Usuarios.Select(u => new UsuarioResponse
            {
                Id =u.Id,
                Nombre = u.Nombre,
                Apellido = u.Apellido,
                Email = u.Email,
                Telefono = u.Telefono,
                Rol = u.Rol,
                Avatar = u.Avatar
            }).ToList();
            return Ok(usuarios);
        }

        // Trae un usuario específico
        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public ActionResult GetUsuario(int id)
        {
            var usuario = _context.Usuarios.Where(u => u.Id == id).Select(u => new UsuarioResponse
            {
                Id =u.Id,
                Nombre = u.Nombre,
                Apellido = u.Apellido,
                Email = u.Email,
                Telefono = u.Telefono,
                Rol = u.Rol,
                Avatar = u.Avatar
            }).FirstOrDefault();
            if (usuario == null)
            {
                return NotFound();
            }
            return Ok(usuario);
        }

        // POST: api/Usuarios/create
        [HttpPost ("create")]
        //[Authorize(Roles = "Admin")]
        [AllowAnonymous]
        public ActionResult CreateUsuario(UsuarioRegisterRequest dto)
        {
            var nuevoUsuario = new Usuario
            {
                Nombre = dto.Nombre,
                Apellido = dto.Apellido,
                Email = dto.Email,
                Contrasena = dto.Contrasena,
                Telefono = dto.Telefono,
                Rol = dto.Rol,
                Avatar = dto.Avatar
            };
            _context.Usuarios.Add(nuevoUsuario);
            _context.SaveChanges();

            return Ok(new { Message = "Usuario creado exitosamente." });
        }

        // Actualiza un usuario existente
        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public IActionResult UpdateUsuario(int id, UsuarioUpdateRequest dto)
        {
            var usuario = _context.Usuarios.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }
            usuario.Nombre = dto.Nombre ?? usuario.Nombre;
            usuario.Apellido = dto.Apellido ?? usuario.Apellido;
            usuario.Telefono = dto.Telefono ?? usuario.Telefono;
            usuario.Avatar = dto.avatar ?? usuario.Avatar;

            _context.SaveChanges();

            return Ok(new { Message = "Usuario actualizado exitosamente." });
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult DeleteUsuario(int id)
        {
            var usuario = _context.Usuarios.Find(id);

            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuario);
            _context.SaveChanges();

            return Ok(new { Message = "Usuario eliminado exitosamente." });
        }
    }
}