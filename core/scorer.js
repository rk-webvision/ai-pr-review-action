function calculateScore(results) {
  let score = 10;

  if (results.rules.length) score -= 2;
  if (results.security.includes("risk")) score -= 2;

  return Math.max(score, 1);
}

module.exports = { calculateScore };