using MySql.Data.MySqlClient;
using api.Models;


namespace api.Models
{
    public class JournalUtility
    {
           public List<Journal>  GetJournalData(){
            List<Journal> entries = new List<Journal>();
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            string stm = "SELECT * from journal;";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read()){
                entries.Add(new Journal
                {
                    journal_id = rdr.GetInt32(0),
                    customer_id = rdr.GetInt32(1),
                    date= rdr.GetString(2),
                    message= rdr.GetString(3),
                });
            }
            
            con.Close();
 
            return entries;
        }
 
        public void InsertJournalData(Journal journal){
            Database db = new Database();
 
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            // check line below
            string stm = "INSERT INTO journal (customer_id, date, message) VALUES(@customer_id, @date, @message);";
            using var cmd = new MySqlCommand(stm, con);
            
            // cmd.Parameters.AddWithValue("@journalID", journal.journalID);
            cmd.Parameters.AddWithValue("@customer_id", journal.customer_id);
            cmd.Parameters.AddWithValue("@date", journal.date);
            cmd.Parameters.AddWithValue("@message", journal.message);

            System.Console.WriteLine(journal.message);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
 
            // con.Close();
        }
    }
}