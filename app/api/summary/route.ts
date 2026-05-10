import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      tool,
      teamSize,
      savings,
      recommendation,
    } = body;

    const prompt = `
    Generate a short professional AI spend audit summary.

    Tool: ${tool}
    Team Size: ${teamSize}
    Estimated Savings: $${savings}
    Recommendation: ${recommendation}

    Keep it under 100 words.
    Sound like a SaaS audit platform.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return Response.json({
      summary:
        response.choices[0].message.content,
    });

  } catch (error: any) {

    console.log("OPENAI ERROR:", error);

    return Response.json({
      summary:
        "Your current AI stack has optimization opportunities that could reduce unnecessary spending while maintaining productivity.",
    });
  }
}