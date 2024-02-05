using MySql.Data.MySqlClient;
using api.Models;

namespace api.Models
{
    public class CustomerMoodUtility
    {
        public List<CustomerMood> ReadCustomerMoods(){
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
 
            con.Open();
            var customerList = new List<CustomerMood>();
            string stm = "SELECT * from customer_mood;";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){
                var customerData = new CustomerMood{
                    customer_mood_id = rdr.GetInt32(0),
                    mood_id = rdr.GetInt32(1),
                    customer_id = rdr.GetInt32(2),
                    message = rdr.GetString(3)
                };
                customerList.Add(customerData);
            }
            con.Close();
            return customerList;
        }

        public void AddCustomers(CustomerMood value){
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"INSERT INTO customer_mood(mood_id, customer_id, message) VALUES(@mood, @customer, @message);";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@mood", value.mood_id);
            cmd.Parameters.AddWithValue("@customer", value.customer_id);
            cmd.Parameters.AddWithValue("@message", value.message);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}