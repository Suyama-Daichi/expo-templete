using GetUserCheckins.models;
using System;

namespace Debugger
{
    class Program
    {
        static async System.Threading.Tasks.Task Main(string[] args)
        {
            GetUserCheckins.Function fnc = new GetUserCheckins.Function();
            var result = await fnc.FunctionHandler(new Request { headers = new Headers() { Authorization = "bearer " },param= new Param() { afterTimestamp = "1585666800",beforeTimestamp= "1588258799" } }, new Amazon.Lambda.TestUtilities.TestLambdaContext());

            Console.WriteLine(result);
            Console.ReadKey();
        }
    }
}
