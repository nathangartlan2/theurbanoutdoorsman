using System;
using System.Text.Json.Serialization;
using Elastic.Clients.Elasticsearch;

namespace urbanoutdoorsman
{
    public class BlogPost
	{
		
        public string? Id { get; set; }
        public string Title { get; set; }
		public string Text  { get; set; }
		public string Location { get; set; }
		public DateTime PublicationTimeStamp { get; set; }
		public IEnumerable<string> Tags { get; set; }



    }
}

