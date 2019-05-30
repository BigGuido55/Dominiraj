using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DominoDBinsert
{
    public class Score
    {
        public Guid ScoreId { get; set; }
        public Guid PlayerId { get; set; }
        public int Points { get; set; }

        public Score()
        {
            this.ScoreId = Guid.NewGuid();
        }

        public Score (Guid Id, int Points)
        {
            this.ScoreId = Guid.NewGuid();
            this.PlayerId = Id;
            this.Points = Points;
        }
    }
}
