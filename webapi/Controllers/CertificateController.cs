using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using iTextSharp.text;
using webapi.Services;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class CertificateController : Controller
    {
        CertificateService _certificateService;

        public CertificateController(CertificateService certificateService) 
        {
            _certificateService = certificateService;
        }

        [HttpGet]
        public Document GenerateCertificate()
        {
            return _certificateService.GenerateSertificate();
        }
    }
}
