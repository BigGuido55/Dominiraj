using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DominoWebApi.Database;
using DominoWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DominoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DominoController : ControllerBase
    {
        private readonly IDominoRepository _context;

        public DominoController(IDominoRepository context)
        {
            _context = context;
        }

        // GET api/domino
        [HttpGet]
        public List<Score> Get()
        {
            return new List<Score>();
            /*Guid guid = Guid.NewGuid();
            Random rand = new Random();
            List<Score> scores = new List<Score>();
            for (int i = 0; i < 3; i++)
            {
                Score score = new Score(guid, rand.Next(101));
                await _context.AddScore(score);
                scores.Add(score);
            }
            return scores;*/
        }

        // GET api/domino/question?category=...
        [HttpGet]
        [Route("question")]
        public async Task<ActionResult<Question>> GetQuestion(string category)
        {
            return await _context.GetRandomQuestionByCategory(category);
        }

        // GET api/domino/categories
        [HttpGet]
        [Route("categories")]
        public async Task<ActionResult<List<String>>> GetAllCategories(string category)
        {
            return await _context.GetAllCategories();
        }

        // GET api/domino/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Score>>> Get(int id)
        {
            return await _context.GetHighScore();
        }

        // POST api/domino/score
        [HttpPost]
        [Route("score")]
        public int PostScore([FromBody] int points)
        {
            Score newScore = new Score(Guid.NewGuid(), points);
            _context.AddScore(newScore);
            return points;
        }

        // PUT api/domino/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/domino/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}