using System;
using System.Collections.Generic;
using System.Text;

namespace GetVenuePhoto.models
{

    public class FoursquareResponse
    {
        public Meta meta { get; set; }
        public Response response { get; set; }
    }

    public class Meta
    {
        public int code { get; set; }
        public string requestId { get; set; }
    }

    public class Response
    {
        public Photos photos { get; set; }
    }

    public class Photos
    {
        public int count { get; set; }
        public Item[] items { get; set; }
        public int dupesRemoved { get; set; }
        public object layout { get; set; }
    }

    public class Item
    {
        public string id { get; set; }
        public int createdAt { get; set; }
        public Source source { get; set; }
        public string prefix { get; set; }
        public string suffix { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public User user { get; set; }
        public Checkin checkin { get; set; }
        public string visibility { get; set; }
    }

    public class Source
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class User
    {
        public string id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public Photo photo { get; set; }
    }

    public class Photo
    {
        public string prefix { get; set; }
        public string suffix { get; set; }
    }

    public class Checkin
    {
        public string id { get; set; }
        public int createdAt { get; set; }
        public string type { get; set; }
        public int timeZoneOffset { get; set; }
    }

}
