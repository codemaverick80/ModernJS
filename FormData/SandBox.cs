using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MusicStore.Web.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/sandbox")]
    [ApiController]
    public class SandBox : ControllerBase
    {
        // GET: api/values        
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CustomerInfo cust)
        {

            var dataFromClient = cust;
            // throw new Exception("Oops! something went wrong");
            return Ok(dataFromClient);

        }

        // PUT api/values/5

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class CustomerInfo
    {
        [JsonProperty("firstname")]
        public string FirstName { get; set; }
        [JsonProperty("lastname")]
        public string LastName { get; set; }
        [JsonProperty("address")]
        public string Address { get; set; }
        [JsonProperty("address2")]
        public string Address2 { get; set; }
        [JsonProperty("city")]
        public string City { get; set; }
        [JsonProperty("zipcode")]
        public string ZipCode { get; set; }
    }
}
