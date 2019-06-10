using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DominoWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DominoWebApi.Database
{
    public class DominoRepository : IDominoRepository
    {
        private readonly DominoDbContext _context;

        public DominoRepository(DominoDbContext context)
        {
            _context = context;
        }

        public async Task AddNewQuestion(Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
        }

        public async Task AddScore(Score score)
        {
            _context.Highscore.Add(score);
            await _context.SaveChangesAsync();
        }

        public async Task<Question> GetRandomQuestionByCategory(string category)
        {
            List<Question> questions = await _context.Questions.Where(s => s.Category.Equals(category)).ToListAsync();
            Random rand = new Random();
            return questions[rand.Next(questions.Count)];
        }

        public async Task<List<String>> GetAllCategories()
        {
            return await _context.Questions.Select(s => s.Category).Distinct().ToListAsync();
        }
        public async Task<List<Score>> GetTop(int number)
        {
            return await _context.Highscore.OrderByDescending(s => s.Points).Take(number).ToListAsync();
        }
    }
}
