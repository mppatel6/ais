using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JournalController : ControllerBase
    {
        // GET: api/Journal
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Journal/5
        [HttpGet("{id}", Name = "GetJournal")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Journal
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Journal/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Journal/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
