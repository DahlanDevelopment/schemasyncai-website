<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:pr-workflow-rules -->
# PR workflow (non-negotiable)

Every change to this repo goes through a pull request. The ruleset on `main`
enforces this mechanically — these rules exist so you don't fight the ruleset.

- Never commit to `main`. Never push to `main`.
- Branch from `origin/main` (fetch first), push the branch, open a PR, squash-merge.
- Linear history is required. Rebase, don't merge-commit, when syncing with `main`.
- Never use `git push --force` against `main`, and never `--no-verify` to skip hooks.
- Never bypass the ruleset, even if GitHub offers the option.
- Required status checks must pass before merge. If CI is red, fix the code — don't disable the check.
- Prefer small, reviewable PRs over large ones.
<!-- END:pr-workflow-rules -->
