using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ConAlambreApi.Migrations
{
    /// <inheritdoc />
    public partial class Nuevo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Contrasena",
                table: "Usuarios",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Servicios_IdCategoria",
                table: "Servicios",
                column: "IdCategoria");

            migrationBuilder.CreateIndex(
                name: "IX_Servicios_IdUsuario",
                table: "Servicios",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_IdUsuario",
                table: "Pedidos",
                column: "IdUsuario");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedidos_Usuarios_IdUsuario",
                table: "Pedidos",
                column: "IdUsuario",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Categorias_IdCategoria",
                table: "Servicios",
                column: "IdCategoria",
                principalTable: "Categorias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Usuarios_IdUsuario",
                table: "Servicios",
                column: "IdUsuario",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedidos_Usuarios_IdUsuario",
                table: "Pedidos");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Categorias_IdCategoria",
                table: "Servicios");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Usuarios_IdUsuario",
                table: "Servicios");

            migrationBuilder.DropIndex(
                name: "IX_Servicios_IdCategoria",
                table: "Servicios");

            migrationBuilder.DropIndex(
                name: "IX_Servicios_IdUsuario",
                table: "Servicios");

            migrationBuilder.DropIndex(
                name: "IX_Pedidos_IdUsuario",
                table: "Pedidos");

            migrationBuilder.DropColumn(
                name: "Contrasena",
                table: "Usuarios");
        }
    }
}
