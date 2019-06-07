using DominoWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DominoWebApi.Database
{
    public interface IDominoRepository
    {
        Task<Question> GetRandomQuestionByCategory(String category);
        Task AddNewQuestion(Question question);
        Task AddScore(Score score);
        Task<List<Score>> GetPlayerScores(Guid PlayerId);
        Task<List<String>> GetAllCategories();
        Task<List<Score>> GetTop(int number);
    }
}
