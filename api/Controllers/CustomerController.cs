using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        // GET: api/Customer
        [HttpGet]
        public List<Customer> Get()
        {
            CustomerUtility readCustomer = new CustomerUtility();
            return readCustomer.ReadCustomers();
            // List<Customer> customers = CustomerUtility.LoadCustomers();
            // return customers;
        }

        // GET: api/Customer/5
        [HttpGet("{id}", Name = "GetCustomer")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpGet("/GetTime", Name = "GetTime")]
        public string GetTime()
        {
            CustomerUtility utility = new CustomerUtility();
            string time = utility.GetTime();
            return time;
        }

        // POST: api/Customer
        [HttpPost]
        public void Post([FromBody] Customer value)
        {
            CustomerUtility addCust = new CustomerUtility();
            addCust.AddCustomers(value);

        }

        // PUT: api/Customer/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Customer/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
