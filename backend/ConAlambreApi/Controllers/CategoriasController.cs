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
    public class CategoriasController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoriasController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
    [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(CreateCategoriaRequest request)
        {
            var categoria = request.Adapt<Categoria>();

            await _context.Categorias.AddAsync(categoria);

            await _context.SaveChangesAsync();

            return StatusCode(201, categoria.Adapt<CategoriaResponse>());
        }

        [HttpPatch("{id}")]
    [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(int id, UpdateCategoriaRequest request)
        {
            var categoria = await _context.Categorias.Where(s => s.Id == id).SingleOrDefaultAsync();
            categoria.Descripcion = request.Descripcion != null ? request.Descripcion : categoria.Descripcion;
            categoria.Nombre = request.Nombre != null ? request.Nombre : categoria.Nombre;

            await _context.SaveChangesAsync();

            return StatusCode(200, categoria.Adapt<CategoriaResponse>());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var categoria = await _context.Categorias.ProjectToType<CategoriaResponse>().Where(s => s.Id == id).SingleOrDefaultAsync();
            
            if (categoria == null) return NotFound();

            return Ok(categoria); 
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var categorias = await _context.Categorias.ProjectToType<CategoriaResponse>().ToListAsync();

            return Ok(categorias); 
        }
    }
}
