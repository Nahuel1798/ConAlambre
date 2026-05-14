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
        public ActionResult GetAll()
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
        public ActionResult GetById(int id)
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

        // Actualiza un usuario existente
        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, UpdateUsuarioRequest dto)
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
            usuario.Rol = dto.Rol ?? usuario.Rol;

            _context.SaveChanges();

            return Ok(new { Message = "Usuario actualizado exitosamente." });
        }

        // POST: api/Usuarios/5/avatar
        [HttpPost("{id}/avatar")]
        public async Task<IActionResult> UploadAvatar(int id, IFormFile file)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null) return NotFound();

            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".webp" };
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            
            if (!allowedExtensions.Contains(extension))
                return BadRequest(new { Message = "Formato de imagen no válido. Usá JPG, PNG o WebP." });

            if (file.Length > 5 * 1024 * 1024)
                return BadRequest(new { Message = "La imagen no puede superar los 5MB." });

            var fileName = $"{id}_{Guid.NewGuid()}{extension}";
            var uploadsDir = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "avatars");
            Directory.CreateDirectory(uploadsDir);
            
            var filePath = Path.Combine(uploadsDir, fileName);
            
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var avatarUrl = $"/uploads/avatars/{fileName}";
            usuario.Avatar = avatarUrl;
            await _context.SaveChangesAsync();

            return Ok(new { avatarUrl });
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id)
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
