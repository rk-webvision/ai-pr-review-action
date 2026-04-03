function ruleAgent(diff) {
  const issues = [];

  if (diff.includes("console.log")) {
    issues.push("Avoid console.log in production");
  }

  if (diff.includes("any")) {
    issues.push("Avoid using 'any'");
  }
  console.log(issues);
  return issues;
}

module.exports = { ruleAgent };