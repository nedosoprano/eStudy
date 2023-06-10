using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net;
using System.Xml.Linq;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.tool.xml;
using System.Text;
using System.IO;
using Org.BouncyCastle.Crypto.Tls;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class CertificateController : Controller
    {
        [HttpGet]
        public Document Post()
        {
            string htmlContent = @"
                <!DOCTYPE html>
                <html>
                <head>
                  <title>Java Course Certificate</title>
                  <style>
                    .viewer {
                        width: 600px;
                        height: 420px;
                        margin: 50px auto;
                        padding: 20px;
                        border: 2px solid #000;
                        background-color: #7394bc;
                    }

                    h2 {
                        text-align: center;
                        margin-bottom: 30px;
                    }

                    .info {
                        margin-bottom: 30px;
                    }

                    .name {
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 10px;
                    }

                    .course {
                        font-size: 18px;
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .date {
                        text-align: center;
                        font-size: 16px;
                    }

                    .signature {
                        text-align: right;
                        margin-top: 50px;
                    }

                    .logo {
                        float: left;
                        height: 70px;
                        width: 150px;
                    }
                  </style>
                </head>
                <body>
                  <div class='viewer'>
                    <h2>Certificate of Completion</h2>
                    <div class='info'>
                        <p class='name'>Denys</p>
                        <p class='course'>Java Basics</p>
                        <p class='date'>This certificate is awarded to Denys for successfully completing the Java Basics.</p>
                    </div>
                    <img class='logo' src='./../angularapp/src/assets/estudy_logo.png'/>
                    <div class='signature'>
                        <p>Nataliia Lynnyk</p>
                        <p>Instructor</p>
                    </div>
                  </div>
                </body>
                </html>";

            string outputFile = "eStudy-certificate.pdf";

            Document document = new Document();
            PdfWriter writer = PdfWriter.GetInstance(document, new FileStream(outputFile, FileMode.Create));


            document.Open();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            using (var sr = new StringReader(htmlContent))
            {
                XMLWorkerHelper.GetInstance().ParseXHtml(writer, document, sr);
            }

            document.Close();

            return document;
        }
    }
}
