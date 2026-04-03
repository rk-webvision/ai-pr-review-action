function aggregate(results) {
  return `
🤖 AI PR Review

🚨 Rule Violations:
${results.rules.length ? results.rules.join("\n") : "None"}

🔐 Security:
${results.security}

⚡ Performance:
${results.performance}

🧹 Code Quality:
${results.quality}
`;
}

module.exports = { aggregate };