using ConAlambreApi.Data;
using ConAlambreApi.Models;
using Microsoft.AspNetCore.Mvc;
using Mapster;
using ConAlambreApi.DTOs.Responses;
using ConAlambreApi.DTOs.Requests;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace ConAlambreApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class PerfilesProfesionalesController : ControllerBase
    {
        private readonly DataContext _context;

        public PerfilesProfesionalesController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreatePerfilProfesionalRequest request)
        {
            var categorias = await _context.Categorias
                .Where(c => request.CategoriaIds.Contains(c.Id))
                .ToListAsync();
            
            if (!categorias.Any() || categorias.Count != request.CategoriaIds.Count)
                return BadRequest(new { Message = "Una o más categorías no existen." });

            var usuario = await _context.Usuarios.FindAsync(request.UsuarioId);
            if (usuario == null)
                return BadRequest(new { Message = "Usuario no encontrado." });

            var perfil = new PerfilProfesional
            {
                UsuarioId = request.UsuarioId,
                Titulo = $"{usuario.Nombre} — Professional",
                Experiencia = request.Experiencia,
                Descripcion = request.Descripcion,
                Categorias = categorias
            };

            await _context.PerfilesProfesionales.AddAsync(perfil);
            await _context.SaveChangesAsync();

            var response = perfil.Adapt<PerfilProfesionalResponse>();
            return StatusCode(201, response);
        }

        [HttpGet("usuario/{usuarioId}")]
        public async Task<IActionResult> GetByUsuarioId(int usuarioId)
        {
            var perfil = await _context.PerfilesProfesionales
                .Include(p => p.Categorias)
                .Where(p => p.UsuarioId == usuarioId)
                .ProjectToType<PerfilProfesionalResponse>()
                .FirstOrDefaultAsync();

            if (perfil == null) return NotFound();
            return Ok(perfil);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdatePerfilProfesionalRequest request)
        {
            var perfil = await _context.PerfilesProfesionales
                .Include(p => p.Categorias)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (perfil == null) return NotFound();

            if (request.Experiencia != null) perfil.Experiencia = request.Experiencia;
            if (request.Descripcion != null) perfil.Descripcion = request.Descripcion;
            
            if (request.CategoriaIds != null)
            {
                var categorias = await _context.Categorias
                    .Where(c => request.CategoriaIds.Contains(c.Id))
                    .ToListAsync();
                perfil.Categorias = categorias;
            }

            await _context.SaveChangesAsync();

            var updated = await _context.PerfilesProfesionales
                .Include(p => p.Categorias)
                .FirstOrDefaultAsync(p => p.Id == id);
                
            var response = updated.Adapt<PerfilProfesionalResponse>();
            return Ok(response);
        }
    }
}
