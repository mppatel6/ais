using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
 
public class OpenAIService
{
    private readonly string _apiKey;
 
    public OpenAIService()
    {
        var jsonString = File.ReadAllText("appsettings.json");
        using var doc = JsonDocument.Parse(jsonString);
        _apiKey = doc.RootElement.GetProperty("OpenAI").GetProperty("ApiKey").GetString();
    }
 
    // This method will be implemented next
    public async Task<string> CallOpenAIAPIAsync(string prompt)
    {
        using var httpClient = new HttpClient();
        httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);
 
        var requestBody = new
        {
            model = "gpt-3.5-turbo",
            messages = new[]
            {
            new { role = "user", content = prompt }
        }
        };
 
        var requestJson = JsonSerializer.Serialize(requestBody);
        var content = new StringContent(requestJson, Encoding.UTF8, "application/json");
 
        // Notice the change in the URL to use the chat completions endpoint
        var response = await httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);
        var responseString = await response.Content.ReadAsStringAsync();
 
        return responseString;
    }
}