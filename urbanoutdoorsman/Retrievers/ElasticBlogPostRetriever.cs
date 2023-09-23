using System;
using Elastic.Clients.Elasticsearch;

namespace urbanoutdoorsman
{
	public class ElasticBlogPostRetriever : IBlogPostRetriever
	{
        private readonly ElasticsearchClient _client;
        private readonly string _index;

		public ElasticBlogPostRetriever(ElasticsearchClient client,
            string index
            )
		{
            _client = client;
            _index = index;
		}

        public BlogPost GetBlogPost(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IndexBlogPostAsync(BlogPost blog)
        {
            var response = await _client.IndexAsync(blog, _index);

            return response.IsSuccess();


        }

        public async Task<IEnumerable<BlogPost>> GetAllBlogPosts()
        {
            var response = await _client.SearchAsync<BlogPost>(s => s.Index(_index));
            List<BlogPost> allPosts = new();

            if (!response.Hits.Any())
            {
                return allPosts;
            }
            foreach (var hit in response.Hits)
            {
                BlogPost postData = hit.Source;
                postData.Id = hit.Id;
                allPosts.Add(postData);

            }

            return allPosts;
        }
    }
}

