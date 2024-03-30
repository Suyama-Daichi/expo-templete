using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using GetVenuePhoto.models;
using Newtonsoft.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetVenuePhoto
{
    public class Function
    {
        HttpClient client;
        readonly string ClientId;
        readonly string ClientSecret;
        public Function()
        {
            client = new HttpClient();
            ClientId = Environment.GetEnvironmentVariable("AWS_REGION");
            ClientSecret = Environment.GetEnvironmentVariable("AWS_REGION");
        }

        /// <summary>
        /// A simple function that takes a string and does a ToUpper
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        async public Task<Photos> FunctionHandler(string venueId, ILambdaContext context)
        {
            var response = await client.GetAsync(
               $"https://api.foursquare.com/v2/venues/{venueId}/photos?client_id={ClientId}&client_secret={ClientSecret}&v=20180815");
            var result = await response.Content.ReadAsStringAsync();
            var deserialisedResult = JsonConvert.DeserializeObject<FoursquareResponse>(result);

            return new Photos
            {
                count = deserialisedResult.response.photos.count,
                items = deserialisedResult.response.photos.items,
                layout = deserialisedResult.response.photos.layout,
            };
        }
    }
}
