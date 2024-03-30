using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using GetUserCheckins.models;
using Newtonsoft.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetUserCheckins
{
    public class Function
    {
        HttpClient client;
        public Function()
        {
            client = new HttpClient();
            client.BaseAddress = new Uri("https://api.foursquare.com/v2/");
            client.DefaultRequestHeaders.Add("Acccept", "application/json");
            client.DefaultRequestHeaders.Add("Accept-Language", "ja");
        }
        /// <summary>
        /// ユーザーのチェックインを取得する
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<FoursquareResponse> FunctionHandler(Request input, ILambdaContext context)
        {
            string accessToken = input.headers.Authorization.Substring(7);
            string afterTimestamp = input.param.afterTimestamp;

            var response = await client.GetAsync(
    $"users/self/checkins?oauth_token={accessToken}&v=20180815&limit=250&afterTimestamp={input.param.afterTimestamp}&beforeTimestamp={input.param.beforeTimestamp}");
            var result = await response.Content.ReadAsStringAsync();
            var deserialisedResult = JsonConvert.DeserializeObject<ResponseFromFoursquare>(result);

            // 1リクエスト250チェックイン制限の対応
            if (deserialisedResult.response.checkins.items.Length == 250)
            {
                CheckinInfo[] additionalCheckins = await getCheckinForOver250PerMonth(accessToken, afterTimestamp, deserialisedResult.response.checkins.items.Last().createdAt);
                deserialisedResult.response.checkins.items = deserialisedResult.response.checkins.items.Concat(additionalCheckins).ToArray();
                while (additionalCheckins.Length == 250)
                {
                    additionalCheckins = await getCheckinForOver250PerMonth(accessToken, afterTimestamp, deserialisedResult.response.checkins.items.Last().createdAt);
                    deserialisedResult.response.checkins.items = deserialisedResult.response.checkins.items.Concat(additionalCheckins).ToArray();
                }
            }

            return new FoursquareResponse
            {
                checkins = new Items
                {
                    count = deserialisedResult.response.checkins.count,
                    items = deserialisedResult.response.checkins.items
                }
            };
        }

        /// <summary>
        /// 250チェックイン/月する場合の処理
        /// </summary>
        /// <param name="accessToken">アクセストークン</param>
        /// <param name="afterTimestamp">取得する期間(始まり)</param>
        /// <param name="beforeTimestamp">取得する期間(終わり)</param>
        /// <param name="deserialisedResult">途中までのチェックイン情報</param>
        /// <returns>結合されたチェックイン情報</returns>
            private async Task<CheckinInfo[]> getCheckinForOver250PerMonth(string accessToken, string afterTimestamp, int beforeTimestamp)
            {
                HttpResponseMessage moreResponse = await client.GetAsync(
                $"users/self/checkins?oauth_token={accessToken}&v=20180815&limit=250&afterTimestamp={afterTimestamp}&beforeTimestamp={beforeTimestamp}");
                string moreResult = await moreResponse.Content.ReadAsStringAsync();
                ResponseFromFoursquare moreDeserialisedResult = JsonConvert.DeserializeObject<ResponseFromFoursquare>(moreResult);
                return moreDeserialisedResult.response.checkins.items;
            }
        }
    }
