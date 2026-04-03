const core = require("@actions/core");
const fs = require("fs");
const { runAgents } = require("./core/orchestrator");
const { aggregate } = require("./core/aggregator");
const { postComment } = require("./utils/github");

async function run() {
  try {
    const apiKey = core.getInput("openai_api_key");
    process.env.OPENAI_API_KEY = apiKey;

    const diff = fs.readFileSync("diff.txt", "utf-8");

    if (!diff.trim()) {
      console.log("No changes found");
      return;
    }

    const results = await runAgents(diff);

    const finalReview = aggregate(results);

    await postComment(finalReview);

  } catch (err) {
    core.setFailed(err.message);
  }
}

run();