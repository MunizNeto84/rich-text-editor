using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DocumentsController : ControllerBase
{
    [HttpPost]
    public IActionResult SaveDocument([FromBody] SaveContentRequest request)
    {
        Console.WriteLine("--- Conteúdo Recebido ---");
        Console.WriteLine(request.HtmlContent);
        Console.WriteLine("-------------------------");


        return Ok(new { Message = "Conteúdo recebido com sucesso!" });
    }
}