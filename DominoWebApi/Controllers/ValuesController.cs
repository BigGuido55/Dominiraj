using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DominoWebApi.Database;
using DominoWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DominoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IDominoRepository _context;

        public ValuesController(IDominoRepository context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<Score>>> Get()
        {
            Guid guid = Guid.NewGuid();
            Random rand = new Random();
            List<Score> scores = new List<Score>();
            for(int i = 0; i < 3; i++)
            {
                Score score = new Score(guid, rand.Next(101));
                await _context.AddScore(score);
                scores.Add(score);
            }
            return scores;
        }

        // GET api/values/questions?category=...
        [HttpGet]
        [Route("questions")]
        public async Task<ActionResult<Question>> GetQuestion(string category)
        {
            return await _context.GetRandomQuestionByCategory(category);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Score>>> Get(int id)
        {
            return await _context.GetHighScore();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
