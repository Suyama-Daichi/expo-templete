using System;
using System.Net.Http;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using GetVenuePhotos.models;
using Newtonsoft.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetVenuePhotos
{
    public class Function
    {
        HttpClient client;
        readonly string ClientId;
        readonly string ClientSecret;
        public Function()
        {
            client = new HttpClient();
            client.BaseAddress = new Uri("https://api.foursquare.com/v2/");
            client.DefaultRequestHeaders.Add("Acccept", "application/json");
            client.DefaultRequestHeaders.Add("Accept-Language", "ja");
            ClientId = Environment.GetEnvironmentVariable("ClientId");
            ClientSecret = Environment.GetEnvironmentVariable("ClientSecret");
        }

        /// <summary>
        /// Ç◊ÉjÉÖÅ[ÇÃé ê^ÇéÊìæÇ∑ÇÈ
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        async public Task<Photos> FunctionHandler(Request input, ILambdaContext context)
        {
            var response = await client.GetAsync(
               $"venues/{input.venueId}/photos?client_id={ClientId}&client_secret={ClientSecret}&v=20180815");
            var result = await response.Content.ReadAsStringAsync();
            var deserialisedResult = JsonConvert.DeserializeObject<FoursquareResponse>(result);

            return new Photos
            {
                count = deserialisedResult.response.photos.count,
                items = deserialisedResult.response.photos.items,
                layout = deserialisedResult.response.photos.layout
            };
        }
    }
}
