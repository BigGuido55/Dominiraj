using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DominoWebApi.Migrations
{
    public partial class finalMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlayerId",
                table: "Highscore");

            migrationBuilder.AddColumn<string>(
                name: "PlayerName",
                table: "Highscore",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlayerName",
                table: "Highscore");

            migrationBuilder.AddColumn<Guid>(
                name: "PlayerId",
                table: "Highscore",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}
