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
    [Authorize]
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
        public ActionResult Login(LoginRequest request)
        {
            var user = _context.Usuarios.FirstOrDefault(u => u.Email == request.Email);
            if (user == null)
            {
                return Unauthorized(new { Message = "Contraseña y email inválidos." });
            }

            bool passwordOk = _hashService.VerifyPassword(
                user.Contrasena,
                request.Contrasena
            );

            if (!passwordOk)
            {
                return Unauthorized(new { Message = "Contraseña y email inválidos." });
            }

            var token = _jwtTokenService.GenerateToken(user);
            return Ok(new AuthResponse
            {
                Token = token,
                Usuario = user.Adapt<UsuarioResponse>()
            });
        }

        // POST: api/Login/register
        [AllowAnonymous]
        [HttpPost("register")]
        public ActionResult Register(RegisterRequest request)
        {
            var existe = _context.Usuarios.Any(u => u.Email == request.Email);
            if (existe)            {
                return BadRequest(new { Message = "El email ya está registrado." });
            }
            var nuevoUsuario = request.Adapt<Usuario>();
            var contraseniaHasheada = _hashService.HashPassword(request.Contrasena);
            nuevoUsuario.Contrasena = contraseniaHasheada;

            _context.Usuarios.Add(nuevoUsuario);
            _context.SaveChanges();

            var token = _jwtTokenService.GenerateToken(nuevoUsuario);
            return Ok(new AuthResponse
            {
                Token = token,
                Usuario = nuevoUsuario.Adapt<UsuarioResponse>()
            });
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
