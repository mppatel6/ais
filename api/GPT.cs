using OpenAI_API;
using OpenAI_API.Completions;

namespace api
{
    public class GPT
    {
        //virtual openAiApiKey = "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";



        // APIAuthentication aPIAuthentication = new APIAuthentication(openAiApiKey);
        // OpenAIAPI openAiApi = new OpenAIAPI(aPIAuthentication);

        // try
        // {
        //     string prompt = "Once upon a time";
        //     string model = "text-davinci-003";
        //     int maxTokens = 50;

        //     var completionRequest = new CompletionRequest
        //     {
        //         Prompt = prompt,
        //         Model = model,
        //         MaxTokens = maxTokens
        //     };

        //     var completionResult = await openAiApi.Completions.CreateCompletionAsync(completionRequest);
        //     var generatedText = completionResult.Completions[0].Text; //completionResult.Choices[0].Text.Trim();

        //     Console.WriteLine("Generated text:");
        //     Console.WriteLine(generatedText);
        // }
        // catch (Exception ex)
        // {
        //     Console.WriteLine($"Error: {ex.Message}");
        // }
    }
}