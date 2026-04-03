const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function performanceAgent(diff) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Find performance issues in this code:\n${diff}`,
      },
    ],
  });

  return res.choices[0].message.content;
}

module.exports = { performanceAgent };