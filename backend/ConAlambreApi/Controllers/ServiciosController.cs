using ConAlambreApi.Data;
using ConAlambreApi.Models;
using Microsoft.AspNetCore.Mvc;
using Mapster;
using ConAlambreApi.DTOs.Responses;
using ConAlambreApi.DTOs.Requests;
using Microsoft.EntityFrameworkCore;

namespace ConAlambreApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServiciosController : ControllerBase
    {
        private readonly DataContext _context;

        public ServiciosController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CrearServicioRequest request)
        {
            var servicio = request.Adapt<Servicio>();

            await _context.Servicios.AddAsync(servicio);

            await _context.SaveChangesAsync();

            return StatusCode(201, servicio.Adapt<ServicioResponse>());
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Update(int id, ActualizarServicioRequest request)
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
        public async Task<IActionResult> FindById(int id)
        {
            var servicio = await _context.Servicios.Where(s => s.Id == id).SingleOrDefaultAsync();
            
            if (servicio == null) return NotFound();

            return StatusCode(201, servicio.Adapt<ServicioResponse>());
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            var servicio = await _context.Servicios.ToListAsync();
            
            if (servicio == null) return NotFound();

            return StatusCode(201, servicio.Adapt<ServicioResponse>());
        }
    }
}
