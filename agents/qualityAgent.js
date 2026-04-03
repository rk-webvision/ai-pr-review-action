const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function qualityAgent(diff) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Review code quality and best practices:\n${diff}`,
      },
    ],
  });

  return res.choices[0].message.content;
}

module.exports = { qualityAgent };