using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using GetCheckinDetail.models;
using Newtonsoft.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetCheckinDetail
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
        /// A simple function that takes a string and does a ToUpper
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<CheckinInfo> FunctionHandler(Request input, ILambdaContext context)
        {
            var response = await client.GetAsync(
                $"checkins/{input.param.checkinId}?oauth_token={input.headers.Authorization.Substring(7)}&v=20180815");
            var result = await response.Content.ReadAsStringAsync();
            var deserialisedResult = JsonConvert.DeserializeObject<ResponseFromFoursquare>(result);
            return new CheckinInfo
            {
                id = deserialisedResult.response.checkin.id,
                createdAt = deserialisedResult.response.checkin.createdAt,
                type = deserialisedResult.response.checkin.type,
                entities = deserialisedResult.response.checkin.entities,
                shout = deserialisedResult.response.checkin.shout,
                timeZoneOffset = deserialisedResult.response.checkin.timeZoneOffset,
                with = deserialisedResult.response.checkin.with,
                user = deserialisedResult.response.checkin.user,
                venue = deserialisedResult.response.checkin.venue,
                source = deserialisedResult.response.checkin.source,
                photos = deserialisedResult.response.checkin.photos,
                posts = deserialisedResult.response.checkin.posts,
                checkinShortUrl = deserialisedResult.response.checkin.checkinShortUrl,
                likes = deserialisedResult.response.checkin.likes,
                like = deserialisedResult.response.checkin.like,
                comments = deserialisedResult.response.checkin.comments,
                sticker = deserialisedResult.response.checkin.sticker,
                isMayor = deserialisedResult.response.checkin.isMayor,
                score = deserialisedResult.response.checkin.score
            };
        }
    }
}
