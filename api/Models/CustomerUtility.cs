using MySql.Data.MySqlClient;
using api.Models;

namespace api.Models
{
    public class CustomerUtility
    {
        public List<Customer> ReadCustomers(){
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
 
            con.Open();
            var customerList = new List<Customer>();
            string stm = "SELECT * from customer;";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){
                var customerData = new Customer{
                    customer_id = rdr.GetInt32(0),
                    email = rdr.GetString(1),
                    password = rdr.GetString(2),
                    firstName = rdr.GetString(3),
                    lastName = rdr.GetString(4)
                };
                customerList.Add(customerData);
            }
            con.Close();
            return customerList;
        }

        public void AddCustomers(Customer value){
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"INSERT INTO customer(email, password, firstName, lastName) VALUES(@email, @password, @firstName, @lastName);";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@email", value.email);
            cmd.Parameters.AddWithValue("@password", value.password);
            cmd.Parameters.AddWithValue("@firstName", value.firstName);
            cmd.Parameters.AddWithValue("@lastName", value.lastName);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }

        public string GetTime(){
            string formattedDate = string.Empty;
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            string stm = "select curdate() as date";
            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read()){
                DateTime date = rdr.GetDateTime(0);
                formattedDate = date.ToString("yyyy-MM-dd HH:mm:ss");
            }
            con.Close();
            Console.WriteLine(formattedDate);
            return formattedDate;
        }
    }
}