using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace urbanoutdoorsman.Controllers;

[ApiController]
[Route("[controller]")]
public class BlogPostController : ControllerBase
{
    // GET: /<controller>/

    private readonly ILogger<BlogPostController> _logger;
    private readonly IBlogPostRetriever _retriever;

    public BlogPostController(IBlogPostRetriever retriever,
        ILogger<BlogPostController> logger)
    {
        _retriever = retriever;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        IEnumerable<BlogPost> posts = await _retriever.GetAllBlogPosts();
        return Ok(posts);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] BlogPost blog)
    {

        try
        {
            await _retriever.IndexBlogPostAsync(blog);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex);
        }
    }
}

