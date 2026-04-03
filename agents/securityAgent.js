const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function securityAgent(diff) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Find security issues in this code:\n${diff}`,
      },
    ],
  });
  console.log("Security");
  return res.choices[0].message.content;
}

module.exports = { securityAgent };