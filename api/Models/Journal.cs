namespace api.Models
{
    public class Journal
    {
        public int journal_id {get; set;}

        public int customer_id {get; set;}

        public string date {get; set;}

        public string message {get; set;}

    }
}