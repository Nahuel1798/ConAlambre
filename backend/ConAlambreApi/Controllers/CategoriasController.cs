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
    public class CategoriasController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoriasController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CrearCategoriaRequest request)
        {
            var categoria = request.Adapt<Categoria>();

            await _context.Categorias.AddAsync(categoria);

            await _context.SaveChangesAsync();

            return StatusCode(201, categoria.Adapt<CategoriaResponse>());
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Update(int id, ActualizarCategoriaRequest request)
        {
            var categoria = await _context.Categorias.Where(s => s.Id == id).SingleOrDefaultAsync();
            categoria.Descripcion = request.Descripcion != null ? request.Descripcion : categoria.Descripcion;
            categoria.Nombre = request.Nombre != null ? request.Nombre : categoria.Nombre;

            await _context.SaveChangesAsync();

            return StatusCode(200, categoria.Adapt<CategoriaResponse>());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> FindById(int id)
        {
            var categoria = await _context.Categorias.Where(s => s.Id == id).SingleOrDefaultAsync();
            
            if (categoria == null) return NotFound();

            return StatusCode(201, categoria.Adapt<CategoriaResponse>());
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            var categoria = await _context.Categorias.ToListAsync();
            
            if (categoria == null) return NotFound();

            return StatusCode(201, categoria.Adapt<CategoriaResponse>());
        }
    }
}
