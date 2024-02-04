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
    public class MoodController : ControllerBase
    {
        // GET: api/Mood
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Mood/5
        [HttpGet("{id}", Name = "GetMood")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mood
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Mood/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Mood/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}