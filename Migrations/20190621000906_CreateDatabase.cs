using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Churras.Migrations
{
    public partial class CreateDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Churrascos",
                columns: table => new
                {
                    ChurrascoID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Data = table.Column<DateTime>(nullable: false),
                    Descricao = table.Column<string>(maxLength: 2000, nullable: true),
                    Observacao = table.Column<string>(maxLength: 4000, nullable: true),
                    ValorSugeridoComBebida = table.Column<decimal>(type: "decimal(8,2)", nullable: true),
                    ValorSugeridoSemBebida = table.Column<decimal>(type: "decimal(8,2)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Churrascos", x => x.ChurrascoID);
                });

            migrationBuilder.CreateTable(
                name: "Participantes",
                columns: table => new
                {
                    ParticipanteID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 200, nullable: true),
                    ValorContribuicao = table.Column<decimal>(type: "decimal(8,2)", nullable: true),
                    Pago = table.Column<bool>(nullable: false),
                    ComBebida = table.Column<bool>(nullable: false),
                    Observacao = table.Column<string>(maxLength: 4000, nullable: true),
                    Email = table.Column<string>(maxLength: 1000, nullable: true),
                    ChurrascoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Participantes", x => x.ParticipanteID);
                    table.ForeignKey(
                        name: "FK_Participantes_Churrascos_ChurrascoID",
                        column: x => x.ChurrascoID,
                        principalTable: "Churrascos",
                        principalColumn: "ChurrascoID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Participantes_ChurrascoID",
                table: "Participantes",
                column: "ChurrascoID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Participantes");

            migrationBuilder.DropTable(
                name: "Churrascos");
        }
    }
}
