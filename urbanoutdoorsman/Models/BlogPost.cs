using System;
namespace urbanoutdoorsman
{
	public class BlogPost
	{
		public string Title { get; set; }
		public string Text  { get; set; }
		public string Location { get; set; }
		public DateTime PublicationTimeStamp { get; set; }
		public IEnumerable<string> Tags { get; set; }

    }
}

