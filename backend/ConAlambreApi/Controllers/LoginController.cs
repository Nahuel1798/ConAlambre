using ConAlambreApi.Data;
using ConAlambreApi.DTOs.Responses;
using ConAlambreApi.Models;
using ConAlambreApi.DTOs.Requests;
using ConAlambreApi.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mapster;

namespace ConAlambreApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly JwtTokenService _jwtTokenService;
        private readonly HashService _hashService;

        public LoginController(DataContext context, JwtTokenService jwtTokenService, HashService hashService)
        {
            _context = context;
            _jwtTokenService = jwtTokenService;
            _hashService = hashService;
        }

        // POST: api/Login
        [AllowAnonymous]
        [HttpPost]
        public ActionResult Login(LoginResponse dto)
        {
            var user = _context.Usuarios.FirstOrDefault(u => u.Email == dto.Email);
            if (user == null)
            {
                return Unauthorized(new { Message = "Contraseña y email inválidos." });
            }

            bool passwordOk = _hashService.VerifyPassword(
                user.Contrasena,
                dto.Contrasena
            );

            if (!passwordOk)
            {
                return Unauthorized(new { Message = "Contraseña y email inválidos." });
            }

            var token = _jwtTokenService.GenerateToken(user);
            return Ok(new
            {
                Token = token,
                UserResponse = user.Adapt<UsuarioResponse>()
            });
        }

        // POST: api/Login/register
        [AllowAnonymous]
        [HttpPost("register")]
        public ActionResult Register(UsuarioRegisterRequest dto)
        {
            var existe = _context.Usuarios.Any(u => u.Email == dto.Email);
            if (existe)            {
                return BadRequest(new { Message = "El email ya está registrado." });
            }
            var nuevoUsuario = new Usuario
            {
                Nombre = dto.Nombre,
                Apellido = dto.Apellido,
                Email = dto.Email,
                Contrasena = _hashService.HashPassword(dto.Contrasena),
                Telefono = dto.Telefono,
                Rol = "User",
                Avatar = dto.Avatar
            };
            _context.Usuarios.Add(nuevoUsuario);
            _context.SaveChanges();
            return Created();
        }

        // POST: api/Login/logout
        [AllowAnonymous]
        [HttpPost("logout")]
        public ActionResult Logout()
        {
            // En JWT, el logout se maneja en el cliente eliminando el token almacenado.
            return Ok(new { Message = "Logout: Token eliminado del cliente." });
        }
    }
}
