using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DominoDBinsert
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Question> questions = new List<Question>();

            String envDirectory = Environment.CurrentDirectory;
            String directory = Directory.GetParent(envDirectory).Parent.Parent.FullName;

            using (StreamReader reader = new StreamReader(directory + "\\pitanjaFico.txt"))
            {
                try
                {
                    while (true)
                    {                 
                        String category = reader.ReadLine();
                        String questionText = reader.ReadLine();
                        String[] answers = reader.ReadLine().Split(',');
                        int correctIndex = Convert.ToInt32(answers[answers.Length - 1]) - 1;
                        String correct = new string("");
                        List<String> wrong = new List<String>();
                        for(int j = 0; j < answers.Length - 1; j++)
                        {
                            if (j == correctIndex) correct = new String(answers[j]);
                            else wrong.Add(answers[j]);
                        }
                        Question question = new Question(category, questionText, correct, wrong[0], wrong[1], wrong[2]);
                        questions.Add(question);
                    }
                }
                catch(Exception e)
                {
                }
            }
            using (StreamReader reader = new StreamReader(directory + "\\pitanjaPrle.txt"))
            {
                try
                {
                    while (true)
                    {
                        String category = reader.ReadLine();
                        String questionText = reader.ReadLine();
                        String[] answers = reader.ReadLine().Split(',');
                        int correctIndex = Convert.ToInt32(answers[answers.Length - 1]) - 1;
                        String correct = new string("");
                        List<String> wrong = new List<String>();
                        for (int j = 0; j < answers.Length - 1; j++)
                        {
                            if (j == correctIndex) correct = new String(answers[j]);
                            else wrong.Add(answers[j]);
                        }
                        Question question = new Question(category, questionText, correct, wrong[0], wrong[1], wrong[2]);
                        questions.Add(question);
                    }
                }
                catch (Exception e)
                {
                }
                
            }
            Console.WriteLine(questions.Count);
            var optionsBuilder = new DbContextOptionsBuilder<DominoDbContext>();
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=DominoDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

            using (DominoDbContext context = new DominoDbContext(optionsBuilder.Options))
            {

                foreach (Question question in questions)
                {
                    context.Questions.Add(question);
                }
                context.SaveChanges();
            }
        }

    }
}
