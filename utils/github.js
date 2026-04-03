const github = require("@actions/github");

async function postComment(comment) {
  const octokit = github.getOctokit(process.env.GITHUB_TOKEN);
  const context = github.context;

  const { owner, repo } = context.repo;
  const issue_number = context.payload.pull_request.number;

  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number,
    body: comment,
  });
}

module.exports = { postComment };