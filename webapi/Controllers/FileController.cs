using DataAccess;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;
//using System.Windows.Forms;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class FileController : Controller
    {
        [HttpPost]
        public HttpStatusCode Import([FromBody] Course course)
        {
            /*OpenFileDialog openFileDialog = new OpenFileDialog();
            openFileDialog.Filter = "All Files (*.*)|*.*"; // Filter to specify the allowed file types

            DialogResult result = openFileDialog.ShowDialog();

            if (result == DialogResult.OK)
            {
                string selectedFilePath = openFileDialog.FileName;
                Console.WriteLine("Selected file: " + selectedFilePath);
            }*/

            return HttpStatusCode.OK;
        }
    }
}
