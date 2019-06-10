using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DominoDBinsert
{
    public class DominoDbContext : DbContext
    {
        public DbSet<Question> Questions { get; set; }
        public DbSet<Score> Highscore { get; set; }

        public DominoDbContext(DbContextOptions Options) : base(Options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Question>().HasKey(s => s.QuestionId);
            modelBuilder.Entity<Question>().Property(s => s.QuestionText).IsRequired();
            modelBuilder.Entity<Question>().Property(s => s.Category).IsRequired();
            modelBuilder.Entity<Question>().Property(s => s.CorrectAnswer).IsRequired();
            modelBuilder.Entity<Question>().Property(s => s.WrongAnswer1).IsRequired();
            modelBuilder.Entity<Question>().Property(s => s.WrongAnswer2).IsRequired();
            modelBuilder.Entity<Question>().Property(s => s.WrongAnswer3).IsRequired();

            modelBuilder.Entity<Score>().HasKey(s => s.ScoreId);
            modelBuilder.Entity<Score>().Property(s => s.PlayerName).IsRequired();
            modelBuilder.Entity<Score>().Property(s => s.Points).IsRequired();
        }
    }
}
