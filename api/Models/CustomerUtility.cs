using MySql.Data.MySqlClient;
using api.Models;


namespace api.Models
{
    public class CustomerUtility
    {
        public static List<Customer> LoadCustomers(){
            List<Customer> customers = new List<Customer>();
            Database db = new Database();
            using var con = new MySqlConnection(db.cs);
 
            con.Open();
            // var customerList = new List<Customer>();
            string stm = "SELECT * from customer;";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){
                customers.Add(new Customer
                {
                    customer_id = rdr.GetInt32(0),
                    email = rdr.GetString(1),
                    password = rdr.GetString(2),
                    firstName = rdr.GetString(3),
                    lastName = rdr.GetString(4)

                });
            }
            con.Close();
            return customers;
        }
    }
}
