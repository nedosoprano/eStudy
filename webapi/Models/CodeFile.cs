using Newtonsoft.Json;
using System;

namespace webapi.Models
{
    public class CodeFile
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }
    }
}
