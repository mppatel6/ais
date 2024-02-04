using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        // GET: api/Chat
        [HttpGet]
        async public Task<string> Get()
        {
            var service = new OpenAIService();
            var prompt = "What is the best weather to live in";
            var response = await service.CallOpenAIAPIAsync(prompt);
            Console.WriteLine(response);
            return response;
        }

        // GET: api/Chat/5
        [HttpGet("{id}", Name = "GetChat")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Chat
        [HttpPost]
        async public Task<string> Post([FromBody] string value)
        {
            Console.WriteLine(value);
            var service = new OpenAIService();
            var prompt = value;
            var response = await service.CallOpenAIAPIAsync(prompt);
            Console.WriteLine(response);
            return response;

        }

        // PUT: api/Chat/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Chat/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
