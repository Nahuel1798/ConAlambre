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
    public class ServiciosController : ControllerBase
    {
        private readonly DataContext _context;

        public ServiciosController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateServicioRequest request)
        {
            var servicio = request.Adapt<Servicio>();

            await _context.Servicios.AddAsync(servicio);

            await _context.SaveChangesAsync();

            return StatusCode(201, servicio.Adapt<ServicioResponse>());
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Update(int id, UpdateServicioRequest request)
        {
            var servicio = await _context.Servicios.Where(s => s.Id == id).SingleOrDefaultAsync();
            servicio.Descripcion = request.Descripcion != null ? request.Descripcion : servicio.Descripcion;
            // falta verificar categoría existente
            servicio.IdCategoria = request.IdCategoria != null ? request.IdCategoria.Value : servicio.IdCategoria;
            servicio.Titulo = request.Titulo != null ? request.Titulo : servicio.Titulo;
            servicio.Precio = request.Precio != null ? request.Precio.Value : servicio.Precio;
            servicio.Nombre = request.Nombre != null ? request.Nombre : servicio.Nombre;

            await _context.SaveChangesAsync();

            return StatusCode(200, servicio.Adapt<ServicioResponse>());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var servicio = await _context.Servicios.ProjectToType<ServicioResponse>().Where(s => s.Id == id).SingleOrDefaultAsync();
            
            if (servicio == null) return NotFound();

            return StatusCode(200, servicio);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var servicio = await _context.Servicios.ProjectToType<ServicioResponse>().ToListAsync();
            
            if (servicio == null) return NotFound();

            return StatusCode(200, servicio);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var servicio = await _context.Servicios.Where(s => s.Id == id).SingleOrDefaultAsync();

            if (servicio == null) return NotFound();

            _context.Servicios.Remove(servicio);

            return NoContent(); 
        }
    }
}
