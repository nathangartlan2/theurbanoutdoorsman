using System;
namespace urbanoutdoorsman
{
	public interface IBlogPostRetriever
	{
		public Task<bool> IndexBlogPostAsync(BlogPost blog);

		public BlogPost GetBlogPost(Guid id);
	}
}

