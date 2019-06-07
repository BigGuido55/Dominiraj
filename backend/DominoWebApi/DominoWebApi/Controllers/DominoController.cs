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
        [Route("highscore")]
        public async Task<List<Score>> GetTop100()
        { 
            return await _context.GetTop(100);
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

        /*// GET api/domino/5
        [HttpGet("{num}")]
        public async Task Get(int num)
        {
            Guid player = Guid.NewGuid();
            Random rand = new Random();

            for(int i = 0; i < num; i++)
            {
                await _context.AddScore(new Score(player, rand.Next(101)));
            }
        }*/

        // POST api/domino/score
        [HttpPost]
        [Route("score")]
        public int PostScore(int points, string name)
        {
            Score newScore = new Score(name, points);
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