import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export async function generateTokenSuggestions(userMessage: string): Promise<{
  suggestions: string[];
  response: string;
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are BloomBot, an AI assistant for Bloompad, a creator token launchpad. Help users brainstorm token names, descriptions, and launch strategies. Be creative, helpful, and focused on community building. Respond with JSON in this format: { "suggestions": ["name1", "name2", "name3"], "response": "helpful message" }`
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || '{"suggestions": [], "response": "I can help you brainstorm token ideas!"}');
    
    return {
      suggestions: result.suggestions || [],
      response: result.response || "I can help you brainstorm token ideas!"
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    return {
      suggestions: [],
      response: "I'm having trouble generating suggestions right now. Please try again!"
    };
  }
}
