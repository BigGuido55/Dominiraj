using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DominoDBinsert
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

        public Score (string name, int Points)
        {
            this.ScoreId = Guid.NewGuid();
            this.PlayerName = name;
            this.Points = Points;
        }
    }
}
