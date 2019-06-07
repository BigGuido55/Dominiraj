using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DominoWebApi.Models
{
    public class Score
    {
        public Guid ScoreId { get; set; }
        public string PlayerName { get; set; }
        public int Points { get; set; }

        public Score()
        {
            this.ScoreId = Guid.NewGuid();
        }

        public Score (string Id, int Points)
        {
            this.ScoreId = Guid.NewGuid();
            this.PlayerName = Id;
            this.Points = Points;
        }
    }
}
