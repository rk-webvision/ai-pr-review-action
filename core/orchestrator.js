const { securityAgent } = require("../agents/securityAgent");
const { performanceAgent } = require("../agents/performanceAgent");
const { qualityAgent } = require("../agents/qualityAgent");
const { ruleAgent } = require("../agents/ruleAgent");

async function runAgents(diff) {
  const [security, performance, quality] = await Promise.all([
    securityAgent(diff),
    performanceAgent(diff),
    qualityAgent(diff),
  ]);

  const rules = ruleAgent(diff);

  return {
    security,
    performance,
    quality,
    rules,
  };
}

module.exports = { runAgents };