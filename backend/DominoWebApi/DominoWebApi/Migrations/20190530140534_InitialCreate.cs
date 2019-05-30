using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DominoWebApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Highscore",
                columns: table => new
                {
                    ScoreId = table.Column<Guid>(nullable: false),
                    PlayerId = table.Column<Guid>(nullable: false),
                    Points = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Highscore", x => x.ScoreId);
                });

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    QuestionId = table.Column<Guid>(nullable: false),
                    QuestionText = table.Column<string>(nullable: false),
                    CorrectAnswer = table.Column<string>(nullable: false),
                    WrongAnswer1 = table.Column<string>(nullable: false),
                    WrongAnswer2 = table.Column<string>(nullable: false),
                    WrongAnswer3 = table.Column<string>(nullable: false),
                    Category = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.QuestionId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Highscore");

            migrationBuilder.DropTable(
                name: "Questions");
        }
    }
}
