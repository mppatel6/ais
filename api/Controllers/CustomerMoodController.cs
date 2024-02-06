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
    public class CustomerMoodController : ControllerBase
    {
        // GET: api/CustomerMood
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/CustomerMood/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CustomerMood
        [HttpPost]
        public void Post([FromBody] CustomerMood value)
        {
            CustomerMoodUtility addCustMood = new CustomerMoodUtility();
            addCustMood.AddCustomers(value);
        }

        // PUT: api/CustomerMood/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/CustomerMood/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
