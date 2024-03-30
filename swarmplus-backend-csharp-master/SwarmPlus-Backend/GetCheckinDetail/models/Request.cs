using System;
using System.Collections.Generic;
using System.Text;

namespace GetCheckinDetail.models
{
    public class Request
    {
        public string method { get; set; }
        public Param param { get; set; }
        public Headers headers { get; set; }
    }

    public class Param
    {
        public string checkinId { get; set; }
    }

    public class Headers
    {
        public string Authorization { get; set; }
    }
}

