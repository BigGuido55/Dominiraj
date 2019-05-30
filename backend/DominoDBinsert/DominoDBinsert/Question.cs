using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DominoDBinsert
{
    public class Question
    {
        public Guid QuestionId { get; set; }
        public String QuestionText { get; set; }
        public String CorrectAnswer { get; set; }
        public String WrongAnswer1 { get; set; }
        public String WrongAnswer2 { get; set; }
        public String WrongAnswer3 { get; set; }
        public String Category { get; set; }

        public Question()
        {
            QuestionId = Guid.NewGuid();
            //this.QuestionText = new string("");
            //this.CorrectAnswer = new string("");
            //this.WrongAnswer1 = new string("");
            //this.WrongAnswer2 = new string("");
            //this.WrongAnswer3 = new string("");
        }

        public Question(String Category, String QuestionText, String CorrectAnswer, String WrongAnswer1, String WrongAnswer2, String WrongAnswer3)
        {
            QuestionId = Guid.NewGuid();
            this.Category = Category;
            this.QuestionText = QuestionText;
            this.CorrectAnswer = CorrectAnswer;
            this.WrongAnswer1 = WrongAnswer1;
            this.WrongAnswer2 = WrongAnswer2;
            this.WrongAnswer3 = WrongAnswer3;
        }
    }
}
