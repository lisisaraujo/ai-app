// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";

export default async function generate(request, response) {
  console.log("request ,", request);
  console.log("response", response);

  const promptTemplate = request.body;

  // here we call openai-api

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0.7,
    prompt: promptTemplate,
    max_tokens: 500,
  });
  console.log(completion.data.choices[0].text);
  const result = completion.data.choices[0].text;
  response.json({ output: result });
}
