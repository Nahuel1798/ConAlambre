using ConAlambreApi.Data;
using ConAlambreApi.Models;
using Microsoft.AspNetCore.Mvc;
using Mapster;
using ConAlambreApi.DTOs.Responses;
using ConAlambreApi.DTOs.Requests;

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
        public async Task<IActionResult> Crear(CrearServicioRequest request)
        {
            var servicio = request.Adapt<Servicio>();

            await _context.Servicios.AddAsync(servicio);

            await _context.SaveChangesAsync();

            return StatusCode(201, servicio.Adapt<ServicioResponse>());
        }
    }
}
