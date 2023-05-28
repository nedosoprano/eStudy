using Newtonsoft.Json;
using System;

namespace webapi.Models
{
    public class GlotIORequest
    {
        [JsonProperty("files")]
        public List<CodeFile> CodeFiles;
    }
}
